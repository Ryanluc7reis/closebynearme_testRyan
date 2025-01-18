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
exports.SearchArticleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const search_base_1 = require("../../../_protos/classes/search.base");
const class_validator_1 = require("class-validator");
const tags_enum_1 = require("../../../_protos/common/enums/tags.enum");
let SearchArticleInput = class SearchArticleInput extends search_base_1.SearchBaseInput {
};
exports.SearchArticleInput = SearchArticleInput;
__decorate([
    (0, graphql_1.Field)(() => tags_enum_1.ArticlesTypeAllowed, {
        defaultValue: tags_enum_1.ArticlesTypeAllowed.EMPTY,
    }),
    (0, class_validator_1.IsEnum)(tags_enum_1.ArticlesTypeAllowed),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchArticleInput.prototype, "type", void 0);
exports.SearchArticleInput = SearchArticleInput = __decorate([
    (0, graphql_1.InputType)()
], SearchArticleInput);
//# sourceMappingURL=search-article.input.js.map