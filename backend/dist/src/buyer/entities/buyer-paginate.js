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
exports.BuyerPaginateResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const buyer_entity_1 = require("./buyer.entity");
const paginate_base_1 = require("../../../_protos/classes/paginate.base");
let BuyerPaginateResponse = class BuyerPaginateResponse extends paginate_base_1.BasePaginateResponse {
};
exports.BuyerPaginateResponse = BuyerPaginateResponse;
__decorate([
    (0, graphql_1.Field)(() => [buyer_entity_1.Buyer], { defaultValue: [] }),
    __metadata("design:type", Array)
], BuyerPaginateResponse.prototype, "docs", void 0);
exports.BuyerPaginateResponse = BuyerPaginateResponse = __decorate([
    (0, graphql_1.ObjectType)({
        implements: [paginate_base_1.BasePaginateResponse],
    })
], BuyerPaginateResponse);
//# sourceMappingURL=buyer-paginate.js.map