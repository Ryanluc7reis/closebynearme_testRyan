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
exports.CompanySchema = exports.Company = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../_protos/common");
const class_validator_1 = require("class-validator");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const mongoose_2 = require("mongoose");
const categories_reduced_entity_1 = require("../../categories/entities/categories.reduced.entity");
const category_entity_1 = require("../../categories/entities/category.entity");
const location_entity_1 = require("../../locations/entities/location.entity");
let Company = class Company {
};
exports.Company = Company;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Object)
], Company.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, {
        defaultValue: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, mongoose_1.Prop)({
        default: 0,
    }),
    __metadata("design:type", Number)
], Company.prototype, "reviewsAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, {
        defaultValue: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, mongoose_1.Prop)({
        default: 0,
    }),
    __metadata("design:type", Number)
], Company.prototype, "reviewsRating", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Company.prototype, "initialLetter", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Company.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '', trim: true }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Company.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '', trim: true }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Company.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Company.prototype, "websiteUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: [],
        ref: category_entity_1.Category.name,
        type: [mongoose_2.Schema.Types.ObjectId],
    }),
    (0, graphql_1.Field)(() => [graphql_type_object_id_no_deps_1.default]),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], Company.prototype, "categoriesId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [] }),
    (0, graphql_1.Field)(() => [categories_reduced_entity_1.CategoriesReduced]),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], Company.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_object_id_no_deps_1.default),
    (0, mongoose_1.Prop)({
        required: true,
        ref: location_entity_1.Location.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], Company.prototype, "locationId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Company.prototype, "locationName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    (0, graphql_1.Field)(() => String, {
        defaultValue: '',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Company.prototype, "locationSlug", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: '',
    }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Company.prototype, "googleMapsLink", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: typeof common_1.MerchantPublishedStatus,
        default: common_1.MerchantPublishedStatus.NOT_LISTING,
    }),
    (0, graphql_1.Field)(() => common_1.MerchantPublishedStatus, {
        defaultValue: common_1.MerchantPublishedStatus.NOT_LISTING,
    }),
    (0, class_validator_1.IsEnum)(common_1.MerchantPublishedStatus),
    __metadata("design:type", String)
], Company.prototype, "merchantListingStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_1.Status),
    (0, mongoose_1.Prop)({ default: common_1.Status.INACTIVE, type: typeof common_1.Status }),
    (0, class_validator_1.IsEnum)(common_1.Status),
    __metadata("design:type", String)
], Company.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Company.prototype, "disabled", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Company.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Company.prototype, "updatedAt", void 0);
exports.Company = Company = __decorate([
    (0, mongoose_1.Schema)({
        versionKey: false,
        timestamps: true,
        collection: 'companies',
    }),
    (0, graphql_1.ObjectType)()
], Company);
exports.CompanySchema = mongoose_1.SchemaFactory.createForClass(Company);
//# sourceMappingURL=company.entity.js.map