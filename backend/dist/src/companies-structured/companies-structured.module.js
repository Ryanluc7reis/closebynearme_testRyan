"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesStructuredModule = void 0;
const common_1 = require("@nestjs/common");
const companies_structured_resolver_1 = require("./companies-structured.resolver");
const locations_module_1 = require("../locations/locations.module");
const articles_module_1 = require("../articles/articles.module");
const categories_module_1 = require("../categories/categories.module");
const companies_module_1 = require("../companies/companies.module");
const faqs_module_1 = require("../faqs/faqs.module");
const products_module_1 = require("../products/products.module");
const reviews_module_1 = require("../reviews/reviews.module");
let CompaniesStructuredModule = class CompaniesStructuredModule {
};
exports.CompaniesStructuredModule = CompaniesStructuredModule;
exports.CompaniesStructuredModule = CompaniesStructuredModule = __decorate([
    (0, common_1.Module)({
        imports: [
            locations_module_1.LocationsModule,
            articles_module_1.ArticlesModule,
            categories_module_1.CategoriesModule,
            companies_module_1.CompaniesModule,
            faqs_module_1.FaqsModule,
            products_module_1.ProductsModule,
            reviews_module_1.ReviewsModule,
        ],
        providers: [companies_structured_resolver_1.CompaniesStructuredResolver],
    })
], CompaniesStructuredModule);
//# sourceMappingURL=companies-structured.module.js.map