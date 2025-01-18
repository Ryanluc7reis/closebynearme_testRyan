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
exports.FaqsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const faqs_service_1 = require("./faqs.service");
const faq_entity_1 = require("./entities/faq.entity");
const create_faq_input_1 = require("./dto/create-faq.input");
const update_faq_input_1 = require("./dto/update-faq.input");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const faqs_paginate_1 = require("./entities/faqs.paginate");
const search_base_1 = require("../../_protos/classes/search.base");
const auth_guard_1 = require("../auth/auth.guard");
const common_1 = require("@nestjs/common");
let FaqsResolver = class FaqsResolver {
    constructor(service) {
        this.service = service;
    }
    async createFaq(input) {
        return (await this.service.create(input))._id;
    }
    findAll(search) {
        return this.service.findAll(search);
    }
    updateFaq(input) {
        return this.service.update(input);
    }
    removeFaq(id) {
        return this.service.remove(id);
    }
    toggleStatus(id) {
        return this.service.toggleStatus(id);
    }
};
exports.FaqsResolver = FaqsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => create_faq_input_1.CreateFaqInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FaqsResolver.prototype, "createFaq", null);
__decorate([
    (0, graphql_1.Query)(() => faqs_paginate_1.FaqsPaginateResponse, { name: 'listFaqsPaginated' }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_base_1.SearchBaseInput]),
    __metadata("design:returntype", void 0)
], FaqsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => update_faq_input_1.UpdateFaqInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FaqsResolver.prototype, "updateFaq", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FaqsResolver.prototype, "removeFaq", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, {
        name: 'toggleFaqStatus',
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FaqsResolver.prototype, "toggleStatus", null);
exports.FaqsResolver = FaqsResolver = __decorate([
    (0, graphql_1.Resolver)(() => faq_entity_1.Faq),
    __metadata("design:paramtypes", [faqs_service_1.FaqsService])
], FaqsResolver);
//# sourceMappingURL=faqs.resolver.js.map