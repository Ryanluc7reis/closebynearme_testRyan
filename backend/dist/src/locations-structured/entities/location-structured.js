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
exports.LocationStructured = void 0;
const graphql_1 = require("@nestjs/graphql");
const location_entity_1 = require("../../locations/entities/location.entity");
const category_entity_1 = require("../../categories/entities/category.entity");
const companies_paginate_1 = require("../../companies/entities/companies.paginate");
const articles_paginate_1 = require("../../articles/entities/articles.paginate");
const faqs_paginate_1 = require("../../faqs/entities/faqs.paginate");
let LocationStructured = class LocationStructured {
};
exports.LocationStructured = LocationStructured;
__decorate([
    (0, graphql_1.Field)(() => location_entity_1.Location),
    __metadata("design:type", location_entity_1.Location)
], LocationStructured.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_entity_1.Category),
    __metadata("design:type", category_entity_1.Category)
], LocationStructured.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => companies_paginate_1.CompaniesPaginateResponse),
    __metadata("design:type", companies_paginate_1.CompaniesPaginateResponse)
], LocationStructured.prototype, "companies", void 0);
__decorate([
    (0, graphql_1.Field)(() => faqs_paginate_1.FaqsPaginateResponse),
    __metadata("design:type", faqs_paginate_1.FaqsPaginateResponse)
], LocationStructured.prototype, "faqs", void 0);
__decorate([
    (0, graphql_1.Field)(() => articles_paginate_1.ArticlesPaginateResponse),
    __metadata("design:type", articles_paginate_1.ArticlesPaginateResponse)
], LocationStructured.prototype, "articles", void 0);
exports.LocationStructured = LocationStructured = __decorate([
    (0, graphql_1.ObjectType)()
], LocationStructured);
//# sourceMappingURL=location-structured.js.map