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
exports.ReviewSchema = exports.Review = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../_protos/common");
const class_validator_1 = require("class-validator");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const mongoose_2 = require("mongoose");
const company_entity_1 = require("../../companies/entities/company.entity");
const location_entity_1 = require("../../locations/entities/location.entity");
let Review = class Review {
};
exports.Review = Review;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Object)
], Review.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Review.prototype, "fullName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: '',
        trim: true,
    }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Review.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_object_id_no_deps_1.default),
    (0, mongoose_1.Prop)({
        required: true,
        ref: company_entity_1.Company.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], Review.prototype, "companyId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: 0,
    }),
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Review.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_object_id_no_deps_1.default),
    (0, mongoose_1.Prop)({
        required: true,
        ref: location_entity_1.Location.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], Review.prototype, "locationId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Review.prototype, "locationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_1.Status),
    (0, mongoose_1.Prop)({ default: common_1.Status.ACTIVE, type: typeof common_1.Status }),
    (0, class_validator_1.IsEnum)(common_1.Status),
    __metadata("design:type", String)
], Review.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Review.prototype, "disabled", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Review.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Review.prototype, "updatedAt", void 0);
exports.Review = Review = __decorate([
    (0, mongoose_1.Schema)({
        versionKey: false,
        collection: 'reviews',
        timestamps: true,
    }),
    (0, graphql_1.ObjectType)()
], Review);
exports.ReviewSchema = mongoose_1.SchemaFactory.createForClass(Review);
//# sourceMappingURL=review.entity.js.map