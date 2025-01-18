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
exports.CategoriesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const categories_service_1 = require("./categories.service");
const category_entity_1 = require("./entities/category.entity");
const create_category_input_1 = require("./dto/create-category.input");
const update_category_input_1 = require("./dto/update-category.input");
const categories_paginate_1 = require("./entities/categories.paginate");
const search_base_1 = require("../../_protos/classes/search.base");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const auth_guard_1 = require("../auth/auth.guard");
const common_1 = require("@nestjs/common");
let CategoriesResolver = class CategoriesResolver {
    constructor(service) {
        this.service = service;
    }
    createCategory(input) {
        return this.service.create(input);
    }
    findAll(search) {
        return this.service.findAll(search);
    }
    updateCategory(input) {
        return this.service.update(input);
    }
    removeCategory(id) {
        return this.service.remove(id);
    }
    toggleStatus(id) {
        return this.service.toggleStatus(id);
    }
};
exports.CategoriesResolver = CategoriesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => create_category_input_1.CreateCategoryInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategoriesResolver.prototype, "createCategory", null);
__decorate([
    (0, graphql_1.Query)(() => categories_paginate_1.CategoriesPaginateResponse, { name: 'listCategoriesPaginated' }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_base_1.SearchBaseInput]),
    __metadata("design:returntype", void 0)
], CategoriesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', { type: () => update_category_input_1.UpdateCategoryInput })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategoriesResolver.prototype, "updateCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategoriesResolver.prototype, "removeCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, {
        name: 'toggleCategoryStatus',
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategoriesResolver.prototype, "toggleStatus", null);
exports.CategoriesResolver = CategoriesResolver = __decorate([
    (0, graphql_1.Resolver)(() => category_entity_1.Category),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesResolver);
//# sourceMappingURL=categories.resolver.js.map