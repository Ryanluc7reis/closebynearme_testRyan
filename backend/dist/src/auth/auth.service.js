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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const account_entity_1 = require("../auth/entities/account.entity");
const jwt_service_1 = require("../common/modules/jwt/jwt.service");
const admin_service_1 = require("../admin/admin.service");
const common_2 = require("../../_protos/common");
const session_entity_1 = require("./entities/session.entity");
const crypto_1 = require("crypto");
const moment = require("moment");
let AuthService = class AuthService {
    constructor(accountModel, sessionModel) {
        this.accountModel = accountModel;
        this.sessionModel = sessionModel;
    }
    async createSessionAdmin(data) {
        let account = await this.accountModel.findOne({ userId: data._id });
        let newAccount = false;
        const expires_at = data.profile.includes(common_2.Roles.ADMIN)
            ? moment().add(1, 'day')
            : moment().add(30, 'day');
        const session = new this.sessionModel({
            sessionToken: (0, crypto_1.randomUUID)(),
            role: data.profile,
            userId: data._id,
            timestamp: expires_at,
        });
        const access_token = await this.jwtService.generateAccessToken(session, expires_at);
        if (!account) {
            account = new this.accountModel({
                userId: data._id,
                type: common_2.AccountSchemaAllowed.ADMIN,
                provider: common_2.Provider.EMAIL,
                access_token,
                expires_at,
                scope: [common_2.Scopes.ADMIN],
                id_token: session._id,
                session_state: common_2.SessionState.AVAILABLE,
            });
            newAccount = true;
        }
        else {
            await account.updateOne({
                $set: {
                    access_token,
                    scope: [common_2.Scopes.ADMIN],
                    expires_at,
                    id_token: session._id,
                },
            });
        }
        if (newAccount) {
            await account.save();
        }
        await session.save();
        await this.sessionModel.deleteMany({ _id: { $ne: session._id } });
        return access_token;
    }
    async loginAdmin({ email, password }) {
        const admin = await this.adminService.findOne({ email });
        if (!admin) {
            throw new common_1.NotFoundException('No encontrado', 'Not found');
        }
        const isPasswordValid = this.jwtService.isPasswordValid(password, admin.password);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException('Email o contraseña incorrecta', 'Email or Password incorrect');
        }
        if (admin.status === common_2.Status.INACTIVE) {
            throw new common_1.BadRequestException('Administrador desactivado', 'Admin disabled');
        }
        const sessionToken = await this.createSessionAdmin(admin);
        return {
            accessToken: sessionToken,
            avatar: admin.avatar,
            id: admin.id,
            email: admin.email,
            fullName: admin.fullName,
            profile: admin.profile,
            permissions: admin.permissions,
            role: admin.role,
        };
    }
    async adminProfile(adminId) {
        return await this.adminService.getProfile(adminId);
    }
    async validate(token) {
        const decoded = this.jwtService.verifySessionToken(token);
        if (!decoded) {
            return {
                status: common_1.HttpStatus.FORBIDDEN,
                error: ['Invalid Token'],
                userId: null,
            };
        }
        const session = await this.jwtService.validateSession(decoded);
        if (!session) {
            return {
                status: common_1.HttpStatus.CONFLICT,
                error: ['Session Expired'],
                userId: null,
            };
        }
        return {
            status: common_1.HttpStatus.OK,
            error: null,
            userId: session.userId,
        };
    }
};
exports.AuthService = AuthService;
__decorate([
    (0, common_1.Inject)(jwt_service_1.JwtService),
    __metadata("design:type", jwt_service_1.JwtService)
], AuthService.prototype, "jwtService", void 0);
__decorate([
    (0, common_1.Inject)(admin_service_1.AdminService),
    __metadata("design:type", admin_service_1.AdminService)
], AuthService.prototype, "adminService", void 0);
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(account_entity_1.Account.name)),
    __param(1, (0, mongoose_1.InjectModel)(session_entity_1.Session.name)),
    __metadata("design:paramtypes", [Object, Object])
], AuthService);
//# sourceMappingURL=auth.service.js.map