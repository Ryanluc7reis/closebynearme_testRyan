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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const login_input_1 = require("./dto/login-input");
const auth_guard_1 = require("./auth.guard");
const auth_decorator_1 = require("./auth.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signin(data) {
        const user = await this.authService.loginAdmin(data);
        return {
            accessToken: user.accessToken,
            userData: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                avatar: user.avatar,
                profile: user.profile,
                role: user.role,
            },
        };
    }
    async me(adminId) {
        const user = await this.authService.adminProfile(adminId);
        return {
            userData: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                avatar: user.avatar,
                profile: user.profile,
                role: user.role,
            },
        };
    }
    async verticalNav(adminId) {
        const admin = await this.authService.adminProfile(adminId);
        const permissions = admin.permissions;
        return [
            {
                title: 'Dashboard',
                path: '/',
                icon: 'tabler:graph',
                auth: true,
                permission: 'DASHBOARD',
            },
            {
                icon: 'tabler:user-hexagon',
                title: 'Admins',
                auth: true,
                permission: 'ADMINS',
                path: '/admins/list',
            },
            {
                icon: 'tabler:category',
                title: 'Categories',
                auth: true,
                permission: 'CATEGORIES',
                path: '/categories/list',
            },
            {
                icon: 'tabler:location',
                title: 'Locations',
                auth: true,
                permission: 'LOCATIONS',
                path: '/locations/list',
            },
            {
                icon: 'tabler:building-warehouse',
                title: 'Companies',
                auth: true,
                permission: 'COMPANIES',
                path: '/companies/list',
            },
            {
                icon: 'tabler:brand-blogger',
                title: 'Articles',
                auth: true,
                permission: 'ARTICLES',
                children: [
                    {
                        title: 'List',
                        path: '/articles/list',
                    },
                    {
                        title: 'Create',
                        path: '/articles/studio-creation',
                    },
                ],
            },
            {
                icon: 'tabler:message-question',
                title: "FAQ's",
                path: '/faqs/list',
                auth: true,
                permission: 'FAQS',
            },
            {
                icon: 'tabler:settings-2',
                title: 'Settings',
                path: '/settings',
                auth: true,
                permission: 'SETTINGS',
            },
            {
                icon: 'tabler:settings-2',
                title: 'Buyers',
                path: '/buyers',
                auth: true,
                permission: 'ADMINS',
            },
        ].filter((item) => permissions.includes(item.permission));
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_1.LoginInput]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signin", null);
__decorate([
    (0, common_1.Get)('/me'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, auth_decorator_1.CurrentAdmin)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "me", null);
__decorate([
    (0, common_1.Get)('/vertical-nav/data'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, auth_decorator_1.CurrentAdmin)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verticalNav", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map