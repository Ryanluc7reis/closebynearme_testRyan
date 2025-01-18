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
exports.ProductPopulate = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_entity_1 = require("./product.entity");
const company_entity_1 = require("../../companies/entities/company.entity");
const class_validator_1 = require("class-validator");
const category_entity_1 = require("../../categories/entities/category.entity");
const location_entity_1 = require("../../locations/entities/location.entity");
const amenities_entity_1 = require("./amenities.entity");
let ProductPopulate = class ProductPopulate extends (0, graphql_1.OmitType)(product_entity_1.Product, [
    'companyId',
    'locationId',
    'categoryId',
    'amenities',
]) {
};
exports.ProductPopulate = ProductPopulate;
__decorate([
    (0, graphql_1.Field)(() => company_entity_1.Company),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", company_entity_1.Company)
], ProductPopulate.prototype, "companyId", void 0);
__decorate([
    (0, graphql_1.Field)(() => location_entity_1.Location),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", location_entity_1.Location)
], ProductPopulate.prototype, "locationId", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_entity_1.Category),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", category_entity_1.Category)
], ProductPopulate.prototype, "categoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [amenities_entity_1.Amenities]),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ProductPopulate.prototype, "amenities", void 0);
exports.ProductPopulate = ProductPopulate = __decorate([
    (0, graphql_1.ObjectType)()
], ProductPopulate);
//# sourceMappingURL=product-populate.js.map