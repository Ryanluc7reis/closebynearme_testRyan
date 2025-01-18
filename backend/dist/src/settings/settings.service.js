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
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const setting_entity_1 = require("./entities/setting.entity");
let SettingsService = class SettingsService {
    constructor(model) {
        this.model = model;
    }
    async onModuleInit() {
        const settings = await this.findOne();
        if (!settings) {
            await this.create();
        }
    }
    async create() {
        await new this.model({
            serviceFee: 49,
        }).save();
        return 'This action adds a new setting';
    }
    async findOne() {
        return (await this.model.find())[0];
    }
    async update({ data }) {
        const model = await this.findOne();
        await model.updateOne({
            $set: {
                ...data,
            },
        });
        return `Updated`;
    }
};
exports.SettingsService = SettingsService;
exports.SettingsService = SettingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(setting_entity_1.Setting.name)),
    __metadata("design:paramtypes", [Object])
], SettingsService);
//# sourceMappingURL=settings.service.js.map