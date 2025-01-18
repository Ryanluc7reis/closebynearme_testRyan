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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const articles_service_1 = require("./articles.service");
const article_entity_1 = require("./entities/article.entity");
const create_article_input_1 = require("./dto/create-article.input");
const update_article_input_1 = require("./dto/update-article.input");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const articles_paginate_1 = require("./entities/articles.paginate");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const search_article_input_1 = require("./dto/search-article.input");
let ArticlesResolver = class ArticlesResolver {
    constructor(service) {
        this.service = service;
    }
    async createArticle(input) {
        return (await this.service.create(input))._id;
    }
    findAll(search) {
        return this.service.findAll(search);
    }
    findOne(_id) {
        return this.service.findOne({ _id });
    }
    updateArticle(input) {
        return this.service.update(input);
    }
    removeArticle(id) {
        return this.service.remove(id);
    }
    toggleStatus(id) {
        return this.service.toggleStatus(id);
    }
};
exports.ArticlesResolver = ArticlesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => create_article_input_1.CreateArticleInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticlesResolver.prototype, "createArticle", null);
__decorate([
    (0, graphql_1.Query)(() => articles_paginate_1.ArticlesPaginateResponse, { name: 'listArticlesPaginated' }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_article_input_1.SearchArticleInput]),
    __metadata("design:returntype", void 0)
], ArticlesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => article_entity_1.Article, { name: 'findOneArticle' }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArticlesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => update_article_input_1.UpdateArticleInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArticlesResolver.prototype, "updateArticle", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArticlesResolver.prototype, "removeArticle", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, {
        name: 'toggleArticleStatus',
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArticlesResolver.prototype, "toggleStatus", null);
exports.ArticlesResolver = ArticlesResolver = __decorate([
    (0, graphql_1.Resolver)(() => article_entity_1.Article),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesResolver);
//# sourceMappingURL=articles.resolver.js.map