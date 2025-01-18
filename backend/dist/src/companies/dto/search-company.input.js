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
exports.SearchCompanyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("../../../_protos/common");
const search_base_1 = require("../../../_protos/classes/search.base");
const class_validator_1 = require("class-validator");
let SearchCompanyInput = class SearchCompanyInput extends search_base_1.SearchBaseInput {
};
exports.SearchCompanyInput = SearchCompanyInput;
__decorate([
    (0, graphql_1.Field)(() => [common_1.MerchantPublishedStatus], {
        defaultValue: [],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], SearchCompanyInput.prototype, "merchantListingStatus", void 0);
exports.SearchCompanyInput = SearchCompanyInput = __decorate([
    (0, graphql_1.InputType)()
], SearchCompanyInput);
//# sourceMappingURL=search-company.input.js.map