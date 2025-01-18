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
exports.ArticleSchema = exports.Article = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../../_protos/common");
const tags_enum_1 = require("../../../_protos/common/enums/tags.enum");
const class_validator_1 = require("class-validator");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const mongoose_2 = require("mongoose");
const category_entity_1 = require("../../categories/entities/category.entity");
const location_entity_1 = require("../../locations/entities/location.entity");
let Article = class Article {
};
exports.Article = Article;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Object)
], Article.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Article.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Article.prototype, "slug", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, mongoose_1.Prop)({
        default: '',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Article.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: category_entity_1.Category.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    (0, graphql_1.Field)(() => graphql_type_object_id_no_deps_1.default),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], Article.prototype, "categoryId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
    }),
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Article.prototype, "categoryName", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_object_id_no_deps_1.default),
    (0, mongoose_1.Prop)({
        required: true,
        ref: location_entity_1.Location.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], Article.prototype, "locationId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Article.prototype, "locationName", void 0);
__decorate([
    (0, graphql_1.Field)(() => tags_enum_1.ArticlesType),
    (0, mongoose_1.Prop)({
        default: tags_enum_1.ArticlesType.DEFAULT,
        type: typeof tags_enum_1.ArticlesType,
    }),
    (0, class_validator_1.IsEnum)(tags_enum_1.ArticlesType),
    __metadata("design:type", String)
], Article.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_1.Status),
    (0, mongoose_1.Prop)({ default: common_1.Status.ACTIVE, type: typeof common_1.Status }),
    (0, class_validator_1.IsEnum)(common_1.Status),
    __metadata("design:type", String)
], Article.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Article.prototype, "disabled", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Article.prototype, "createdAt", void 0);
exports.Article = Article = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        versionKey: false,
        collection: 'articles',
    }),
    (0, graphql_1.ObjectType)()
], Article);
exports.ArticleSchema = mongoose_1.SchemaFactory.createForClass(Article);
//# sourceMappingURL=article.entity.js.map