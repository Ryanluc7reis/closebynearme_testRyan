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
exports.SearchBaseInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const common_1 = require("../common");
(0, graphql_1.registerEnumType)(common_1.StatusAllowed, {
    name: 'StatusAllowed',
});
let SearchBaseInput = class SearchBaseInput {
};
exports.SearchBaseInput = SearchBaseInput;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String, { defaultValue: '' }),
    __metadata("design:type", String)
], SearchBaseInput.prototype, "q", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchBaseInput.prototype, "sortColumn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchBaseInput.prototype, "sort", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { defaultValue: 1 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], SearchBaseInput.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { defaultValue: 10 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], SearchBaseInput.prototype, "perPage", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_1.StatusAllowed, { defaultValue: common_1.StatusAllowed.ACTIVE }),
    (0, class_validator_1.IsEnum)(common_1.StatusAllowed),
    __metadata("design:type", String)
], SearchBaseInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true, defaultValue: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], SearchBaseInput.prototype, "all", void 0);
exports.SearchBaseInput = SearchBaseInput = __decorate([
    (0, graphql_1.InputType)()
], SearchBaseInput);
//# sourceMappingURL=search.base.js.map