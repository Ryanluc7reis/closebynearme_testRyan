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
exports.CompaniesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const companies_service_1 = require("./companies.service");
const company_entity_1 = require("./entities/company.entity");
const create_company_input_1 = require("./dto/create-company.input");
const update_company_input_1 = require("./dto/update-company.input");
const companies_paginate_1 = require("./entities/companies.paginate");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const auth_guard_1 = require("../auth/auth.guard");
const common_1 = require("@nestjs/common");
const search_company_input_1 = require("./dto/search-company.input");
let CompaniesResolver = class CompaniesResolver {
    constructor(service) {
        this.service = service;
    }
    async createCompany(input) {
        return (await this.service.create(input))._id;
    }
    findAll(search) {
        return this.service.findAll(search);
    }
    findOne(_id) {
        return this.service.findOne({ _id });
    }
    updateCompany(input) {
        return this.service.update(input);
    }
    removeCompany(id) {
        return this.service.remove(id);
    }
    toggleStatus(id) {
        return this.service.toggleStatus(id);
    }
};
exports.CompaniesResolver = CompaniesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => create_company_input_1.CreateCompanyInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompaniesResolver.prototype, "createCompany", null);
__decorate([
    (0, graphql_1.Query)(() => companies_paginate_1.CompaniesPaginateResponse, { name: 'listCompaniesPaginated' }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_company_input_1.SearchCompanyInput]),
    __metadata("design:returntype", void 0)
], CompaniesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => company_entity_1.Company, { name: 'findOneCompany' }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CompaniesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => update_company_input_1.UpdateCompanyInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CompaniesResolver.prototype, "updateCompany", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CompaniesResolver.prototype, "removeCompany", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, {
        name: 'toggleCompanyStatus',
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CompaniesResolver.prototype, "toggleStatus", null);
exports.CompaniesResolver = CompaniesResolver = __decorate([
    (0, graphql_1.Resolver)(() => company_entity_1.Company),
    __metadata("design:paramtypes", [companies_service_1.CompaniesService])
], CompaniesResolver);
//# sourceMappingURL=companies.resolver.js.map