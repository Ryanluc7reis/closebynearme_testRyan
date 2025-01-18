"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const admin_module_1 = require("./admin/admin.module");
const auth_module_1 = require("./auth/auth.module");
const common_module_1 = require("./common/modules/common.module");
const categories_module_1 = require("./categories/categories.module");
const locations_module_1 = require("./locations/locations.module");
const companies_module_1 = require("./companies/companies.module");
const articles_module_1 = require("./articles/articles.module");
const faqs_module_1 = require("./faqs/faqs.module");
const locations_structured_module_1 = require("./locations-structured/locations-structured.module");
const companies_structured_module_1 = require("./companies-structured/companies-structured.module");
const uploads_module_1 = require("./uploads/uploads.module");
const reviews_module_1 = require("./reviews/reviews.module");
const products_module_1 = require("./products/products.module");
const settings_module_1 = require("./settings/settings.module");
const mongo_module_1 = require("./common/modules/mongo/mongo.module");
const buyer_module_1 = require("./buyer/buyer.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_module_1.CommomModule,
            auth_module_1.AuthModule,
            admin_module_1.AdminModule,
            categories_module_1.CategoriesModule,
            locations_module_1.LocationsModule,
            companies_module_1.CompaniesModule,
            articles_module_1.ArticlesModule,
            faqs_module_1.FaqsModule,
            locations_structured_module_1.LocationsStructuredModule,
            companies_structured_module_1.CompaniesStructuredModule,
            uploads_module_1.UploadsModule,
            reviews_module_1.ReviewsModule,
            products_module_1.ProductsModule,
            settings_module_1.SettingsModule,
            mongo_module_1.MongoConfigModule,
            buyer_module_1.BuyerModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map