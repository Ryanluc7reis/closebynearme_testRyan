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
exports.CompanyStructured = void 0;
const graphql_1 = require("@nestjs/graphql");
const location_entity_1 = require("../../locations/entities/location.entity");
const company_entity_1 = require("../../companies/entities/company.entity");
const products_paginate_1 = require("../../products/entities/products.paginate");
const review_paginate_1 = require("../../reviews/entities/review.paginate");
let CompanyStructured = class CompanyStructured {
};
exports.CompanyStructured = CompanyStructured;
__decorate([
    (0, graphql_1.Field)(() => location_entity_1.Location),
    __metadata("design:type", location_entity_1.Location)
], CompanyStructured.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_entity_1.Company),
    __metadata("design:type", company_entity_1.Company)
], CompanyStructured.prototype, "company", void 0);
__decorate([
    (0, graphql_1.Field)(() => products_paginate_1.ProductsPaginateResponse),
    __metadata("design:type", products_paginate_1.ProductsPaginateResponse)
], CompanyStructured.prototype, "products", void 0);
__decorate([
    (0, graphql_1.Field)(() => review_paginate_1.ReviewsPaginateResponse),
    __metadata("design:type", review_paginate_1.ReviewsPaginateResponse)
], CompanyStructured.prototype, "reviews", void 0);
exports.CompanyStructured = CompanyStructured = __decorate([
    (0, graphql_1.ObjectType)()
], CompanyStructured);
//# sourceMappingURL=company-structured.js.map