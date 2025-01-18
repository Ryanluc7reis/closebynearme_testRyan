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
exports.CreateCompanyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("../../../_protos/common");
const class_validator_1 = require("class-validator");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const create_category_input_1 = require("../../categories/dto/create-category.input");
let CreateCompanyInput = class CreateCompanyInput {
    constructor() {
        this.status = common_1.Status.INACTIVE;
    }
};
exports.CreateCompanyInput = CreateCompanyInput;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "phoneNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "websiteUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_object_id_no_deps_1.default),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], CreateCompanyInput.prototype, "locationId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "locationName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "locationSlug", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_type_object_id_no_deps_1.default]),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateCompanyInput.prototype, "categoriesId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [create_category_input_1.CategoryInput]),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateCompanyInput.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "googleMapsLink", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(common_1.Status),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "initialLetter", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {
        defaultValue: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCompanyInput.prototype, "reviewsAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, {
        defaultValue: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCompanyInput.prototype, "reviewsRating", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_1.MerchantPublishedStatus),
    (0, class_validator_1.IsEnum)(common_1.Status),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "merchantListingStatus", void 0);
exports.CreateCompanyInput = CreateCompanyInput = __decorate([
    (0, graphql_1.InputType)()
], CreateCompanyInput);
//# sourceMappingURL=create-company.input.js.map