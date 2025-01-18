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
exports.AdminResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const admin_service_1 = require("./admin.service");
const admin_entity_1 = require("./entities/admin.entity");
const create_admin_input_1 = require("./dto/create-admin.input");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const auth_decorator_1 = require("../auth/auth.decorator");
const admin_paginate_1 = require("./entities/admin-paginate");
const search_admin_input_1 = require("./dto/search-admin-input");
const update_admin_input_1 = require("./dto/update-admin.input");
const recover_password_input_1 = require("./dto/recover-password-input");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
let AdminResolver = class AdminResolver {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async me(adminId) {
        return await this.adminService.getProfile(adminId);
    }
    async createAdmin(input) {
        return this.adminService.create(input);
    }
    async updateAdmin(input) {
        return this.adminService.update(input);
    }
    async toggleActiveInactiveAdmin(id) {
        return this.adminService.updateStatus(id);
    }
    async findAll(admin, data) {
        return await this.adminService.findPaginateAndByFilter(data, admin);
    }
    async checkRecoverSecureIdValid(data) {
        return await this.adminService.checkRecoverId(data);
    }
    async recoverPassword(data) {
        await this.adminService.recoverPassword(data);
        return 'Done';
    }
    async changePassword(data) {
        return await this.adminService.changePassword(data);
    }
};
exports.AdminResolver = AdminResolver;
__decorate([
    (0, graphql_1.Query)(() => admin_entity_1.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, auth_decorator_1.CurrentAdmin)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "me", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_input_1.CreateAdminInput]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "createAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => update_admin_input_1.UpdateAdminInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "updateAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "toggleActiveInactiveAdmin", null);
__decorate([
    (0, graphql_1.Query)(() => admin_paginate_1.AdminPaginateResponse, {
        name: 'listAdmin',
        description: 'List admins in Admin',
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, auth_decorator_1.CurrentAdmin)()),
    __param(1, (0, graphql_1.Args)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, search_admin_input_1.SearchAdminInput]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => String),
    __param(0, (0, graphql_1.Args)({ name: 'input' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recover_password_input_1.CheckRecoverIdInput]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "checkRecoverSecureIdValid", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, { name: 'recoverPasswordAdmin' }),
    __param(0, (0, graphql_1.Args)({ name: 'input' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recover_password_input_1.RecoverPasswordInput]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "recoverPassword", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, { name: 'changePasswordAdmin' }),
    __param(0, (0, graphql_1.Args)({ name: 'input' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recover_password_input_1.ChangePasswordInput]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "changePassword", null);
exports.AdminResolver = AdminResolver = __decorate([
    (0, graphql_1.Resolver)(() => admin_entity_1.Admin),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminResolver);
//# sourceMappingURL=admin.resolver.js.map