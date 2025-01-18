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
exports.AmenitiesPaginateResponse = exports.ProductsPaginateResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const paginate_base_1 = require("../../../_protos/classes/paginate.base");
const product_entity_1 = require("./product.entity");
const amenities_entity_1 = require("./amenities.entity");
let ProductsPaginateResponse = class ProductsPaginateResponse extends paginate_base_1.BasePaginateResponse {
};
exports.ProductsPaginateResponse = ProductsPaginateResponse;
__decorate([
    (0, graphql_1.Field)(() => [product_entity_1.Product], { defaultValue: [] }),
    __metadata("design:type", Array)
], ProductsPaginateResponse.prototype, "docs", void 0);
exports.ProductsPaginateResponse = ProductsPaginateResponse = __decorate([
    (0, graphql_1.ObjectType)({
        implements: [paginate_base_1.BasePaginateResponse],
    })
], ProductsPaginateResponse);
let AmenitiesPaginateResponse = class AmenitiesPaginateResponse extends paginate_base_1.BasePaginateResponse {
};
exports.AmenitiesPaginateResponse = AmenitiesPaginateResponse;
__decorate([
    (0, graphql_1.Field)(() => [amenities_entity_1.Amenities], { defaultValue: [] }),
    __metadata("design:type", Array)
], AmenitiesPaginateResponse.prototype, "docs", void 0);
exports.AmenitiesPaginateResponse = AmenitiesPaginateResponse = __decorate([
    (0, graphql_1.ObjectType)({
        implements: [paginate_base_1.BasePaginateResponse],
    })
], AmenitiesPaginateResponse);
//# sourceMappingURL=products.paginate.js.map