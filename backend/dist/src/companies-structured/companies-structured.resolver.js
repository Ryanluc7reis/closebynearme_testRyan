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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesStructuredResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const company_structured_1 = require("./entities/company-structured");
const common_1 = require("@nestjs/common");
const companies_service_1 = require("../companies/companies.service");
const locations_service_1 = require("../locations/locations.service");
const search_base_1 = require("../../_protos/classes/search.base");
const products_service_1 = require("../products/products.service");
const reviews_service_1 = require("../reviews/reviews.service");
const common_2 = require("../../_protos/common");
let CompaniesStructuredResolver = class CompaniesStructuredResolver {
    async findOneBySlug(slug) {
        return {
            company: await (await this.companyService.findOne({ slug })).populate('categoriesId'),
        };
    }
    async location(slug) {
        return await this.locationService.findOne({
            slug,
        });
    }
    async reviews(data, search) {
        const { company } = data;
        return await this.reviewsService.findAll({
            ...search,
            status: common_2.StatusAllowed.ACTIVE,
        }, company._id);
    }
    async products(data, search, categorySlug) {
        const { company } = data;
        const res = await this.productsService.findAll({
            ...search,
            companyId: company._id,
        });
        if (res.totalDocs >= 1) {
            return res;
        }
        const categories = company.categoriesId;
        return await this.productsService.findAll({
            ...search,
            locationId: company.locationId,
            categoriesId: categories
                .filter((item) => item.slug === categorySlug)
                .map((item) => item._id),
        });
    }
};
exports.CompaniesStructuredResolver = CompaniesStructuredResolver;
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", locations_service_1.LocationsService)
], CompaniesStructuredResolver.prototype, "locationService", void 0);
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", companies_service_1.CompaniesService)
], CompaniesStructuredResolver.prototype, "companyService", void 0);
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", products_service_1.ProductsService)
], CompaniesStructuredResolver.prototype, "productsService", void 0);
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", reviews_service_1.ReviewsService)
], CompaniesStructuredResolver.prototype, "reviewsService", void 0);
__decorate([
    (0, graphql_1.Query)(() => company_structured_1.CompanyStructured, { name: 'findOneCompanyBySlug' }),
    __param(0, (0, graphql_1.Args)('companySlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompaniesStructuredResolver.prototype, "findOneBySlug", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Args)('locationSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompaniesStructuredResolver.prototype, "location", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, graphql_1.Args)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_structured_1.CompanyStructured,
        search_base_1.SearchBaseInput]),
    __metadata("design:returntype", Promise)
], CompaniesStructuredResolver.prototype, "reviews", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, graphql_1.Args)('search')),
    __param(2, (0, graphql_1.Args)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_structured_1.CompanyStructured,
        search_base_1.SearchBaseInput, String]),
    __metadata("design:returntype", Promise)
], CompaniesStructuredResolver.prototype, "products", null);
exports.CompaniesStructuredResolver = CompaniesStructuredResolver = __decorate([
    (0, graphql_1.Resolver)(() => company_structured_1.CompanyStructured)
], CompaniesStructuredResolver);
//# sourceMappingURL=companies-structured.resolver.js.map