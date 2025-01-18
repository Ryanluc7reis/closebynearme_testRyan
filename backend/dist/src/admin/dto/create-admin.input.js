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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdminInput = void 0;
const class_validator_1 = require("class-validator");
const common_1 = require("../../../_protos/common");
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
let CreateAdminInput = class CreateAdminInput {
    constructor() {
        this.fullRecord = false;
        this.profile = [common_1.Roles.ADMIN];
        this.status = common_1.Status.ACTIVE;
    }
};
exports.CreateAdminInput = CreateAdminInput;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Object)
], CreateAdminInput.prototype, "fullRecord", void 0);
__decorate([
    (0, graphql_1.Field)(() => [common_1.Roles], {
        defaultValue: [common_1.Roles.ADMIN],
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Object)
], CreateAdminInput.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_1.Status, { defaultValue: common_1.Status.ACTIVE }),
    (0, class_validator_1.IsEnum)(common_1.Status),
    __metadata("design:type", Object)
], CreateAdminInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { defaultValue: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAdminInput.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_transformer_1.Transform)(({ value }) => value.toLowerCase()),
    __metadata("design:type", String)
], CreateAdminInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], CreateAdminInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateAdminInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => [common_1.PermissionsMenu]),
    (0, class_validator_1.ArrayNotEmpty)(),
    __metadata("design:type", Array)
], CreateAdminInput.prototype, "permissions", void 0);
exports.CreateAdminInput = CreateAdminInput = __decorate([
    (0, graphql_1.InputType)()
], CreateAdminInput);
//# sourceMappingURL=create-admin.input.js.map