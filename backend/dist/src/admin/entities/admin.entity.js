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
exports.AdminSchema = exports.Admin = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const common_1 = require("../../../_protos/common");
const graphql_1 = require("@nestjs/graphql");
let Admin = class Admin {
};
exports.Admin = Admin;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Object)
], Admin.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, mongoose_1.Prop)({ required: true, unique: true, trim: true }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Admin.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Admin.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { defaultValue: '' }),
    (0, mongoose_1.Prop)({ required: false, default: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Admin.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    (0, class_validator_1.Length)(8, 32),
    __metadata("design:type", String)
], Admin.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_1.Status),
    (0, mongoose_1.Prop)({ required: true, default: common_1.Status.ACTIVE, type: typeof common_1.Status }),
    (0, class_validator_1.IsEnum)(common_1.Status),
    __metadata("design:type", String)
], Admin.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Admin.prototype, "disabled", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Admin.prototype, "fullRecord", void 0);
__decorate([
    (0, graphql_1.Field)(() => [common_1.PermissionsMenu]),
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsEnum)(common_1.PermissionsMenu),
    (0, class_validator_1.ArrayNotEmpty)(),
    __metadata("design:type", Array)
], Admin.prototype, "permissions", void 0);
__decorate([
    (0, graphql_1.Field)(() => [common_1.Roles]),
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Array }),
    (0, class_validator_1.IsEnum)(common_1.Roles),
    __metadata("design:type", Array)
], Admin.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, {
        defaultValue: 'admin',
    }),
    (0, mongoose_1.Prop)({ required: true, default: 'admin' }),
    (0, class_validator_1.IsEnum)(common_1.Roles),
    __metadata("design:type", String)
], Admin.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Admin.prototype, "createdAt", void 0);
exports.Admin = Admin = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, mongoose_1.Schema)({
        timestamps: true,
        versionKey: false,
    })
], Admin);
exports.AdminSchema = mongoose_1.SchemaFactory.createForClass(Admin);
//# sourceMappingURL=admin.entity.js.map