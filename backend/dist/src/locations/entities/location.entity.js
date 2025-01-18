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
exports.LocationSchema = exports.Location = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../_protos/common");
const class_validator_1 = require("class-validator");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const mongoose_2 = require("mongoose");
const categories_reduced_entity_1 = require("../../categories/entities/categories.reduced.entity");
const category_entity_1 = require("../../categories/entities/category.entity");
let Location = class Location {
};
exports.Location = Location;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Object)
], Location.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Location.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Location.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: '',
    }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Location.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: [],
        ref: category_entity_1.Category.name,
        type: [mongoose_2.Schema.Types.ObjectId],
    }),
    (0, graphql_1.Field)(() => [graphql_type_object_id_no_deps_1.default]),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], Location.prototype, "categoriesId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [] }),
    (0, graphql_1.Field)(() => [categories_reduced_entity_1.CategoriesReduced]),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], Location.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_1.Status),
    (0, mongoose_1.Prop)({ default: common_1.Status.INACTIVE, type: typeof common_1.Status }),
    (0, class_validator_1.IsEnum)(common_1.Status),
    __metadata("design:type", String)
], Location.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Location.prototype, "disabled", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Location.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Location.prototype, "updatedAt", void 0);
exports.Location = Location = __decorate([
    (0, mongoose_1.Schema)({
        versionKey: false,
        timestamps: true,
        collection: 'locations',
    }),
    (0, graphql_1.ObjectType)()
], Location);
exports.LocationSchema = mongoose_1.SchemaFactory.createForClass(Location);
//# sourceMappingURL=location.entity.js.map