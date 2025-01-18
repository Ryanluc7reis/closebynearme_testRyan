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
exports.SettingsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const settings_service_1 = require("./settings.service");
const setting_entity_1 = require("./entities/setting.entity");
const update_setting_input_1 = require("./dto/update-setting.input");
const common_1 = require("@nestjs/common");
let SettingsResolver = class SettingsResolver {
    async findOne() {
        let settings = await this.service.findOne();
        if (!settings) {
            await this.service.create();
            settings = await this.service.findOne();
        }
        return settings;
    }
    updateSetting(input) {
        return this.service.update(input);
    }
};
exports.SettingsResolver = SettingsResolver;
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", settings_service_1.SettingsService)
], SettingsResolver.prototype, "service", void 0);
__decorate([
    (0, graphql_1.Query)(() => setting_entity_1.Setting, { name: 'getSettings' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_setting_input_1.UpdateSettingInput]),
    __metadata("design:returntype", void 0)
], SettingsResolver.prototype, "updateSetting", null);
exports.SettingsResolver = SettingsResolver = __decorate([
    (0, graphql_1.Resolver)(() => setting_entity_1.Setting)
], SettingsResolver);
//# sourceMappingURL=settings.resolver.js.map