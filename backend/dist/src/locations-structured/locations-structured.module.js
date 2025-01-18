"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsStructuredModule = void 0;
const common_1 = require("@nestjs/common");
const locations_structured_resolver_1 = require("./locations-structured.resolver");
const locations_module_1 = require("../locations/locations.module");
const articles_module_1 = require("../articles/articles.module");
const categories_module_1 = require("../categories/categories.module");
const companies_module_1 = require("../companies/companies.module");
const faqs_module_1 = require("../faqs/faqs.module");
const schema_generator_service_1 = require("./schema-generator.service");
const products_module_1 = require("../products/products.module");
let LocationsStructuredModule = class LocationsStructuredModule {
};
exports.LocationsStructuredModule = LocationsStructuredModule;
exports.LocationsStructuredModule = LocationsStructuredModule = __decorate([
    (0, common_1.Module)({
        imports: [
            locations_module_1.LocationsModule,
            articles_module_1.ArticlesModule,
            categories_module_1.CategoriesModule,
            companies_module_1.CompaniesModule,
            faqs_module_1.FaqsModule,
            products_module_1.ProductsModule,
        ],
        providers: [locations_structured_resolver_1.LocationsStructuredResolver, schema_generator_service_1.SchemaGeneratorService],
    })
], LocationsStructuredModule);
//# sourceMappingURL=locations-structured.module.js.map