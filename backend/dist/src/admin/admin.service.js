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
var AdminService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const admin_entity_1 = require("./entities/admin.entity");
const jwt_service_1 = require("../common/modules/jwt/jwt.service");
const common_2 = require("../../_protos/common");
const redis_service_1 = require("../common/modules/redis/redis.service");
const config_1 = require("../common/modules/config");
const recover_entity_1 = require("./entities/recover.entity");
const bcrypt = require("bcryptjs");
const uuid_1 = require("uuid");
const makeRandom_1 = require("../../libs/makeRandom");
let AdminService = AdminService_1 = class AdminService {
    constructor(adminModel, recoverModel) {
        this.adminModel = adminModel;
        this.recoverModel = recoverModel;
        this.logger = new common_1.Logger(AdminService_1.name);
    }
    async onModuleInit() {
        await this.handleCreateDefaultAdmin();
    }
    encryptPassword(password) {
        return bcrypt.hashSync(password, 10);
    }
    async handleCreateDefaultAdmin() {
        const defaultData = (0, makeRandom_1.loadDefaultAdmin)();
        let exists = await this.findOne({
            $or: [
                {
                    _id: defaultData._id,
                },
                {
                    email: defaultData.email,
                },
            ],
        }, true);
        this.logger.debug('Searching default Admin');
        if (exists) {
            const permissions = Object.keys(common_2.PermissionsMenu);
            const missingPermissions = permissions.filter((item) => !exists.permissions.includes(item));
            const permissionsNotValid = exists.permissions.filter((item) => !permissions.includes(item));
            if (missingPermissions.length || permissionsNotValid.length) {
                await this.update({
                    _id: exists._id,
                    data: {
                        permissions,
                    },
                });
            }
            return;
        }
        this.logger.warn('default Admin not found');
        const data = (0, makeRandom_1.createDefaultAdmin)();
        await this.create({
            email: data.email,
            password: data.password,
            fullName: 'Main Admin',
            avatar: '',
            fullRecord: true,
            profile: [common_2.Roles.SUPER_ADMIN, common_2.Roles.ADMIN, common_2.Roles.MANAGER],
            status: common_2.Status.ACTIVE,
            permissions: [
                common_2.PermissionsMenu.DASHBOARD,
                common_2.PermissionsMenu.ADMINS,
                common_2.PermissionsMenu.SETTINGS,
            ],
        });
        exists = await this.findOne({ email: defaultData.email }, true);
        const url = await this.recoverPassword({ email: data.email });
        (0, makeRandom_1.updateDefaultAdmin)({ ...data, url, _id: exists._id });
        this.logger.debug('default Admin was created_v1');
    }
    async create(data) {
        const admin = await this.findOne({ email: data.email }, true);
        if (admin) {
            throw new common_1.BadRequestException('El correo ya está registrado', 'The mail is already registered');
        }
        const newAdmin = new this.adminModel({
            ...data,
            password: this.jwtService.encodePassword(data.password),
            permissions: [common_2.PermissionsMenu.DASHBOARD, ...data.permissions],
        });
        await newAdmin.save();
        return 'Admin Created';
    }
    async update({ _id, data }) {
        const duplicated = await this.findOne({
            email: data.email,
            _id: { $ne: _id },
        }, true);
        if (duplicated) {
            throw new common_1.BadRequestException('Email duplicado', 'Email duplicated');
        }
        const admin = await this.findOne({ _id });
        if (data.password) {
            data.password = this.jwtService.encodePassword(data.password);
        }
        await admin.updateOne({
            $set: {
                ...data,
                permissions: [common_2.PermissionsMenu.DASHBOARD, ...data.permissions],
            },
        });
        return 'Updated';
    }
    async findAll(option) {
        return await this.adminModel.find(option);
    }
    async getProfile(_id) {
        const name_space = `PROFILE:ADMIN:${_id}`;
        let admin = await this.cacheService.get(name_space);
        if (!admin) {
            admin = await this.findOne({ _id });
            await this.cacheService.set(name_space, admin, 60);
        }
        return admin;
    }
    async findOne(option, skipError = false) {
        const model = await this.adminModel.findOne({
            ...option,
        });
        if (!model && !skipError) {
            throw new common_1.NotFoundException('No encontrado', 'Not found');
        }
        return model;
    }
    async updateStatus(_id) {
        const admin = await this.findOne({ _id });
        await admin.updateOne({
            $set: {
                status: admin.status === common_2.Status.ACTIVE ? common_2.Status.INACTIVE : common_2.Status.ACTIVE,
            },
        });
        return 'Admin status updated';
    }
    async findPaginateAndByFilter({ page, perPage, q, status, all }, adminId) {
        const handleFilter = () => {
            let req = { disabled: false };
            if (q !== '') {
                req = {
                    ...req,
                    $or: [
                        { fullName: { $regex: new RegExp(q, 'gi') } },
                        { email: { $regex: new RegExp(q, 'gi') } },
                        { phone: { $regex: new RegExp(q, 'gi') } },
                    ],
                };
            }
            if (status !== '') {
                req = { ...req, status };
            }
            req = { ...req, profile: common_2.Roles.ADMIN };
            req = {
                ...req,
                _id: { $ne: adminId },
                profile: { $nin: [common_2.Roles.SUPER_ADMIN] },
            };
            return req;
        };
        return await this.adminModel.paginate(handleFilter(), {
            page,
            limit: perPage,
            pagination: !all,
            sort: {
                createdAt: 1,
            },
        });
    }
    async checkRecoverId({ secureId }) {
        const recover = await this.recoverModel.findOne({
            secureId,
        });
        if (!recover) {
            throw new common_1.BadRequestException('El secureId no es valido', 'Not valid secure ID');
        }
        return 'Secure ID is valid';
    }
    async changePassword(data) {
        const recover = await this.recoverModel.findOne({
            secureId: data.secureId,
        });
        if (!recover) {
            throw new common_1.NotFoundException('No existe', 'Not found');
        }
        const admin = await this.findOne({ _id: recover.userId });
        const encryptedPassword = this.encryptPassword(data.password);
        const password = encryptedPassword;
        await admin.updateOne({
            password,
        });
        await recover.deleteOne();
        const defaultAdmin = (0, makeRandom_1.loadDefaultAdmin)();
        if (admin.id === defaultAdmin._id) {
            (0, makeRandom_1.updateDefaultAdmin)({
                password: '<encrypted>',
                fullRecord: true,
                url: '',
            });
        }
        return 'Done';
    }
    async recoverPassword({ email }) {
        const admin = await this.adminModel.findOne({ email });
        if (!admin) {
            throw new common_1.NotFoundException('El administrador no existe', 'Admin not found');
        }
        let recover = await this.recoverModel.findOne({
            userId: admin._id,
            profile: admin.profile,
        });
        if (!recover) {
            recover = await new this.recoverModel({
                secureId: (0, uuid_1.v4)(),
                userId: admin._id,
                profile: admin.profile,
            }).save();
        }
        const url = `${config_1.default.ADMIN_FRONTEND_URL}/auth/change-password/${recover.secureId}?new=true`;
        const defaultAdmin = (0, makeRandom_1.loadDefaultAdmin)();
        if (admin.id === defaultAdmin._id) {
            (0, makeRandom_1.updateDefaultAdmin)({ url, fullRecord: false });
            this.logger.log(`New password request change for: ${email} ${url}`);
        }
        return url;
    }
};
exports.AdminService = AdminService;
__decorate([
    (0, common_1.Inject)(jwt_service_1.JwtService),
    __metadata("design:type", jwt_service_1.JwtService)
], AdminService.prototype, "jwtService", void 0);
__decorate([
    (0, common_1.Inject)(redis_service_1.CacheService),
    __metadata("design:type", redis_service_1.CacheService)
], AdminService.prototype, "cacheService", void 0);
exports.AdminService = AdminService = AdminService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(admin_entity_1.Admin.name)),
    __param(1, (0, mongoose_1.InjectModel)(recover_entity_1.Recover.name)),
    __metadata("design:paramtypes", [Object, Object])
], AdminService);
//# sourceMappingURL=admin.service.js.map