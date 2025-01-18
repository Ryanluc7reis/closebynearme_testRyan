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
exports.LocationsStructuredResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const location_structured_1 = require("../locations-structured/entities/location-structured");
const locations_service_1 = require("../locations/locations.service");
const common_1 = require("@nestjs/common");
const companies_service_1 = require("../companies/companies.service");
const articles_service_1 = require("../articles/articles.service");
const categories_service_1 = require("../categories/categories.service");
const faqs_service_1 = require("../faqs/faqs.service");
const search_base_1 = require("../../_protos/classes/search.base");
const locations_paginate_1 = require("../locations/entities/locations.paginate");
const search_article_input_1 = require("../articles/dto/search-article.input");
const schema_generator_service_1 = require("./schema-generator.service");
const location_entity_1 = require("../locations/entities/location.entity");
const common_2 = require("../../_protos/common");
let LocationsStructuredResolver = class LocationsStructuredResolver {
    async findCategoriesByLocationBySlug(slug) {
        return await this.locationService.findOne({ slug });
    }
    async findOneBySlug(slug, categorySlug) {
        return {
            location: await this.locationService.findOne({
                slug,
                status: common_2.Status.ACTIVE,
            }),
            category: await this.categoriesService.findOne({
                slug: categorySlug,
                status: common_2.Status.ACTIVE,
            }),
        };
    }
    async companies(data, search) {
        const { location, category } = data;
        return await this.companyService.findAll({
            ...search,
            locationId: location._id,
            categoryId: category._id,
        });
    }
    async faqs(data, search) {
        const { location, category } = data;
        return await this.faqsService.findAll(search, location._id, category._id);
    }
    async articles(data, search) {
        const { location, category } = data;
        return await this.articlesService.findAll(search, location._id, category._id);
    }
    async findLocations(search) {
        return await this.locationService.findAll(search);
    }
    async triggerSchemaGenerator() {
        await this.schemaGeneratorService.schemaFeedGenerator();
        return await this.schemaGeneratorService.schemaGenerator();
    }
};
exports.LocationsStructuredResolver = LocationsStructuredResolver;
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", locations_service_1.LocationsService)
], LocationsStructuredResolver.prototype, "locationService", void 0);
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", companies_service_1.CompaniesService)
], LocationsStructuredResolver.prototype, "companyService", void 0);
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", articles_service_1.ArticlesService)
], LocationsStructuredResolver.prototype, "articlesService", void 0);
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", categories_service_1.CategoriesService)
], LocationsStructuredResolver.prototype, "categoriesService", void 0);
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", faqs_service_1.FaqsService)
], LocationsStructuredResolver.prototype, "faqsService", void 0);
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", schema_generator_service_1.SchemaGeneratorService)
], LocationsStructuredResolver.prototype, "schemaGeneratorService", void 0);
__decorate([
    (0, graphql_1.Query)(() => location_entity_1.Location, { name: 'findCategoriesByLocationBySlug' }),
    __param(0, (0, graphql_1.Args)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationsStructuredResolver.prototype, "findCategoriesByLocationBySlug", null);
__decorate([
    (0, graphql_1.Query)(() => location_structured_1.LocationStructured, { name: 'findOneLocationBySlug' }),
    __param(0, (0, graphql_1.Args)('slug')),
    __param(1, (0, graphql_1.Args)('categorySlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LocationsStructuredResolver.prototype, "findOneBySlug", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, graphql_1.Args)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [location_structured_1.LocationStructured,
        search_base_1.SearchBaseInput]),
    __metadata("design:returntype", Promise)
], LocationsStructuredResolver.prototype, "companies", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, graphql_1.Args)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [location_structured_1.LocationStructured,
        search_base_1.SearchBaseInput]),
    __metadata("design:returntype", Promise)
], LocationsStructuredResolver.prototype, "faqs", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, graphql_1.Args)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [location_structured_1.LocationStructured,
        search_article_input_1.SearchArticleInput]),
    __metadata("design:returntype", Promise)
], LocationsStructuredResolver.prototype, "articles", null);
__decorate([
    (0, graphql_1.Query)(() => locations_paginate_1.LocationsPaginateResponse),
    __param(0, (0, graphql_1.Args)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_base_1.SearchBaseInput]),
    __metadata("design:returntype", Promise)
], LocationsStructuredResolver.prototype, "findLocations", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, {
        name: 'triggerSchemaGenerator',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationsStructuredResolver.prototype, "triggerSchemaGenerator", null);
exports.LocationsStructuredResolver = LocationsStructuredResolver = __decorate([
    (0, graphql_1.Resolver)(() => location_structured_1.LocationStructured)
], LocationsStructuredResolver);
//# sourceMappingURL=locations-structured.resolver.js.map