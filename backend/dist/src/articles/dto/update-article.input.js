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
exports.UpdateArticleInput = exports.UpdateArticleData = void 0;
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const create_article_input_1 = require("./create-article.input");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let UpdateArticleData = class UpdateArticleData extends (0, graphql_1.PartialType)(create_article_input_1.CreateArticleInput) {
};
exports.UpdateArticleData = UpdateArticleData;
exports.UpdateArticleData = UpdateArticleData = __decorate([
    (0, graphql_1.InputType)()
], UpdateArticleData);
let UpdateArticleInput = class UpdateArticleInput {
};
exports.UpdateArticleInput = UpdateArticleInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_type_object_id_no_deps_1.default),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], UpdateArticleInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => UpdateArticleData),
    (0, class_validator_1.IsNotEmptyObject)(),
    __metadata("design:type", UpdateArticleData)
], UpdateArticleInput.prototype, "data", void 0);
exports.UpdateArticleInput = UpdateArticleInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateArticleInput);
//# sourceMappingURL=update-article.input.js.map