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
exports.ReviewsPaginateResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const paginate_base_1 = require("../../../_protos/classes/paginate.base");
const review_entity_1 = require("./review.entity");
let ReviewsPaginateResponse = class ReviewsPaginateResponse extends paginate_base_1.BasePaginateResponse {
};
exports.ReviewsPaginateResponse = ReviewsPaginateResponse;
__decorate([
    (0, graphql_1.Field)(() => [review_entity_1.Review], { defaultValue: [] }),
    __metadata("design:type", Array)
], ReviewsPaginateResponse.prototype, "docs", void 0);
exports.ReviewsPaginateResponse = ReviewsPaginateResponse = __decorate([
    (0, graphql_1.ObjectType)({
        implements: [paginate_base_1.BasePaginateResponse],
    })
], ReviewsPaginateResponse);
//# sourceMappingURL=review.paginate.js.map