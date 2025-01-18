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
exports.SearchAdminInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("../../../_protos/common");
const search_base_1 = require("../../../_protos/classes/search.base");
const class_validator_1 = require("class-validator");
let SearchAdminInput = class SearchAdminInput extends search_base_1.SearchBaseInput {
};
exports.SearchAdminInput = SearchAdminInput;
__decorate([
    (0, graphql_1.Field)(() => common_1.RolesAllowed, {
        defaultValue: common_1.RolesAllowed.ADMIN,
    }),
    (0, class_validator_1.IsEnum)(common_1.RolesAllowed),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchAdminInput.prototype, "role", void 0);
exports.SearchAdminInput = SearchAdminInput = __decorate([
    (0, graphql_1.InputType)()
], SearchAdminInput);
//# sourceMappingURL=search-admin-input.js.map