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
exports.ProductSchema = exports.Product = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const company_entity_1 = require("../../companies/entities/company.entity");
const mongoose_2 = require("mongoose");
const product_enum_1 = require("../../../_protos/common/enums/product.enum");
const common_1 = require("../../../_protos/common");
const category_entity_1 = require("../../categories/entities/category.entity");
const location_entity_1 = require("../../locations/entities/location.entity");
const amenities_entity_1 = require("./amenities.entity");
let Product = class Product {
};
exports.Product = Product;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Object)
], Product.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Product.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)(),
    (0, mongoose_1.Prop)({
        default: [],
    }),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, class_validator_1.IsNumber)(),
    (0, mongoose_1.Prop)({
        default: 0,
    }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, class_validator_1.IsNumber)(),
    (0, mongoose_1.Prop)({
        default: 0,
    }),
    __metadata("design:type", Number)
], Product.prototype, "full_price", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_enum_1.ProductPriceType),
    (0, mongoose_1.Prop)({
        default: product_enum_1.ProductPriceType.DAY,
        type: typeof product_enum_1.ProductPriceType,
    }),
    (0, class_validator_1.IsEnum)(product_enum_1.ProductPriceType),
    __metadata("design:type", String)
], Product.prototype, "priceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNumber)(),
    (0, mongoose_1.Prop)({
        default: 2,
    }),
    __metadata("design:type", Number)
], Product.prototype, "minimunDays", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, class_validator_1.IsNumber)(),
    (0, mongoose_1.Prop)({
        default: 0,
    }),
    __metadata("design:type", Number)
], Product.prototype, "serviceFee", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: company_entity_1.Company.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    (0, graphql_1.Field)(() => graphql_type_object_id_no_deps_1.default),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], Product.prototype, "companyId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: category_entity_1.Category.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    (0, graphql_1.Field)(() => graphql_type_object_id_no_deps_1.default),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], Product.prototype, "categoryId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: location_entity_1.Location.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    (0, graphql_1.Field)(() => graphql_type_object_id_no_deps_1.default),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], Product.prototype, "locationId", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_1.Status),
    (0, mongoose_1.Prop)({ default: common_1.Status.ACTIVE, type: typeof common_1.Status }),
    (0, class_validator_1.IsEnum)(common_1.Status),
    __metadata("design:type", String)
], Product.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: [],
        ref: amenities_entity_1.Amenities.name,
        type: [mongoose_2.Schema.Types.ObjectId],
    }),
    (0, graphql_1.Field)(() => [graphql_type_object_id_no_deps_1.default]),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], Product.prototype, "amenities", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Product.prototype, "spaceRequirements", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Product.prototype, "supervision", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Product.prototype, "safety", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], Product.prototype, "insurancePlan", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, mongoose_1.Prop)({
        default: '',
    }),
    __metadata("design:type", String)
], Product.prototype, "notification", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Product.prototype, "disabled", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
exports.Product = Product = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'products',
        timestamps: true,
        versionKey: false,
    }),
    (0, graphql_1.ObjectType)()
], Product);
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.entity.js.map