"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaGeneratorService = void 0;
const common_1 = require("@nestjs/common");
const aws_s3_service_1 = require("../common/modules/aws/aws-s3.service");
const companies_service_1 = require("../companies/companies.service");
const locations_service_1 = require("../locations/locations.service");
const xmlbuilder2_1 = require("xmlbuilder2");
const fs = require("fs/promises");
const common_2 = require("../../_protos/common");
const moment = require("moment");
const schedule_1 = require("@nestjs/schedule");
const config_1 = require("../common/modules/config");
const products_service_1 = require("../products/products.service");
let SchemaGeneratorService = class SchemaGeneratorService {
    async handleCron() {
        if (config_1.default.ENV === 'production') {
            try {
                await this.schemaGenerator();
            }
            catch (e) {
                console.log(e);
            }
            try {
                await this.schemaFeedGenerator();
            }
            catch (e) {
                console.log(e);
            }
        }
    }
    async handleCompaniesPublished(page, url_path, storage) {
        const data = await this.companyService.findAll({
            all: false,
            page,
            status: common_2.StatusAllowed.ACTIVE,
            perPage: 100,
            q: '',
            merchantListingStatus: [common_2.MerchantPublishedStatus.PUBLISHED],
        });
        console.log(`Companies Published in total: ${data.totalDocs} ~ Page: ${page} ~ Total Pages: ${data.totalPages} `);
        for await (const item of data.docs) {
            await this.handleProducts(1, item._id, url_path, storage);
        }
        if (data.hasNextPage && data.nextPage) {
            await this.handleCompaniesPublished(data.nextPage, url_path, storage);
        }
    }
    async handleProducts(page, companyId, url_path, storage) {
        const data = await this.productService.findAll({
            all: false,
            page,
            status: common_2.StatusAllowed.ACTIVE,
            perPage: 50,
            q: '',
            companyId,
        });
        for await (const item of data.docs) {
            const slug = `product/${item.slug}`;
            storage.set(slug, {
                id: String(item._id),
                title: item.name,
                description: item.description,
                link: `${url_path}/${slug}`,
                image_link: item.images[0],
                availability: 'in_stock',
                price: `${item.full_price} USD`,
                identifier_exists: 'no',
                condition: 'new',
                shipping: 'US',
            });
        }
        if (data.hasNextPage && data.nextPage) {
            await this.handleProducts(data.nextPage, companyId, url_path, storage);
        }
    }
    async handleProductsForSchema(page, url_path, storage) {
        const data = await this.productService.findAll({
            all: false,
            page,
            status: common_2.StatusAllowed.ACTIVE,
            perPage: 100,
            q: '',
        });
        for await (const item of data.docs) {
            const slug = `product/${item.slug}`;
            storage.set(slug, {
                lastmod: moment(item.updatedAt).format('YYYY-MM-DD'),
                url: `${url_path}/${slug}`,
            });
        }
        if (data.hasNextPage && data.nextPage) {
            await this.handleProductsForSchema(data.nextPage, url_path, storage);
        }
    }
    async handleLocations(page, url_path, storage) {
        const data = await this.locationService.findAll({
            all: false,
            page,
            status: common_2.StatusAllowed.ACTIVE,
            perPage: 50,
            q: '',
        });
        for await (const item of data.docs) {
            item.categories.forEach((category) => {
                const slug = `city/${item.slug}`;
                storage.set(`${slug}/${category.slug}`, {
                    lastmod: moment(item.updatedAt).format('YYYY-MM-DD'),
                    url: `${url_path}/${slug}/${category.slug}`,
                });
            });
        }
        if (data.hasNextPage && data.nextPage) {
            await this.handleLocations(data.nextPage, url_path, storage);
        }
    }
    async handleCompanies(page, url_path, storage) {
        const data = await this.companyService.findAll({
            all: false,
            page,
            status: common_2.StatusAllowed.ACTIVE,
            perPage: 100,
            q: '',
            merchantListingStatus: [
                common_2.MerchantPublishedStatus.NOT_LISTING,
                common_2.MerchantPublishedStatus.PUBLISHED,
            ],
        });
        for await (const item of data.docs) {
            item.categories.forEach((category) => {
                const slug = `city/${item.locationSlug}`;
                storage.set(`${slug}/${category.slug}/${item.slug}`, {
                    lastmod: moment(item.updatedAt).format('YYYY-MM-DD'),
                    url: `${url_path}/${slug}/${category.slug}/${item.slug}`,
                });
            });
        }
        if (data.hasNextPage && data.nextPage) {
            await this.handleCompanies(data.nextPage, url_path, storage);
        }
    }
    async schemaGenerator() {
        const url_path = 'https://closebynearme.com';
        const path = 'sitemap.xml';
        const root = (0, xmlbuilder2_1.create)()
            .ele('urlset', {
            xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
        })
            .ele('url')
            .ele('loc')
            .txt(url_path)
            .up()
            .ele('lastmod')
            .txt(moment(new Date()).format('YYYY-MM-DD'))
            .up()
            .ele('changefreq')
            .txt('daily')
            .up()
            .ele('priority')
            .txt('1')
            .up()
            .up();
        const dataToRender = new Map();
        await this.handleLocations(1, url_path, dataToRender);
        await this.handleCompanies(1, url_path, dataToRender);
        await this.handleProductsForSchema(1, url_path, dataToRender);
        for await (const item of [...dataToRender.values()]) {
            root
                .ele('url')
                .ele('loc')
                .txt(item.url)
                .up()
                .ele('lastmod')
                .txt(item.lastmod)
                .up()
                .ele('changefreq')
                .txt('daily')
                .up()
                .ele('priority')
                .txt('0.7')
                .up()
                .up();
        }
        const xml = root.end({ prettyPrint: true });
        await fs.writeFile(path, Buffer.from(xml));
        await this.s3Service.uploadFileSchema(path, 'sitemap/sitemap.xml');
        console.log('Done uploading sitemap');
        return 'Done';
    }
    async schemaFeedGenerator() {
        const url_path = 'https://closebynearme.com';
        const title_path = 'Close by near me';
        const description_path = 'Close by near me';
        const path = 'merchant_feed.xml';
        const root = (0, xmlbuilder2_1.create)({
            encoding: 'utf-8',
            version: '1.0',
        })
            .ele('rss', {
            version: '2.0',
            'xmlns:g': 'http://base.google.com/ns/1.0',
        })
            .ele('channel')
            .ele('title')
            .txt(title_path)
            .up()
            .ele('description')
            .txt(description_path)
            .up()
            .ele('link')
            .txt(url_path)
            .up();
        const dataToRender = new Map();
        await this.handleCompaniesPublished(1, url_path, dataToRender);
        for await (const item of [...dataToRender.values()]) {
            root
                .ele('item')
                .ele('g:id')
                .txt(item.id)
                .up()
                .ele('title')
                .txt(item.title)
                .up()
                .ele('description')
                .txt(item.description)
                .up()
                .ele('link')
                .txt(item.link)
                .up()
                .ele('g:image_link')
                .txt(item.image_link)
                .up()
                .ele('g:availability')
                .txt(item.availability)
                .up()
                .ele('g:price')
                .txt(item.price)
                .up()
                .ele('g:identifier_exists')
                .txt(item.identifier_exists)
                .up()
                .ele('g:condition')
                .txt(item.condition)
                .up()
                .ele('g:shipping')
                .ele('g:country')
                .txt(item.shipping)
                .up()
                .up()
                .up();
        }
        const xml = root.end({ prettyPrint: true });
        await fs.writeFile(path, Buffer.from(xml));
        await this.s3Service.uploadFileSchema(path, 'merchant_feed/feed.xml');
        console.log('Done uploading merchant feed');
        return 'Done';
    }
};
exports.SchemaGeneratorService = SchemaGeneratorService;
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", locations_service_1.LocationsService)
], SchemaGeneratorService.prototype, "locationService", void 0);
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", companies_service_1.CompaniesService)
], SchemaGeneratorService.prototype, "companyService", void 0);
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", products_service_1.ProductsService)
], SchemaGeneratorService.prototype, "productService", void 0);
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", aws_s3_service_1.S3Service)
], SchemaGeneratorService.prototype, "s3Service", void 0);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_HOUR),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchemaGeneratorService.prototype, "handleCron", null);
exports.SchemaGeneratorService = SchemaGeneratorService = __decorate([
    (0, common_1.Injectable)()
], SchemaGeneratorService);
//# sourceMappingURL=schema-generator.service.js.map