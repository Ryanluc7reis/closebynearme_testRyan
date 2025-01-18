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
exports.AccountSchema = exports.Account = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const common_1 = require("../../../_protos/common");
let Account = class Account {
};
exports.Account = Account;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.ObjectId }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", Object)
], Account.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Array }),
    (0, class_validator_1.IsEnum)(common_1.AccountSchemaAllowed),
    __metadata("design:type", Array)
], Account.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: typeof common_1.Provider }),
    (0, class_validator_1.IsEnum)(common_1.Provider),
    __metadata("design:type", String)
], Account.prototype, "provider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: '' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsJWT)(),
    __metadata("design:type", String)
], Account.prototype, "refresh_token", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsJWT)(),
    __metadata("design:type", String)
], Account.prototype, "access_token", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Account.prototype, "expires_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: typeof common_1.Scopes }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(common_1.Scopes),
    __metadata("design:type", Array)
], Account.prototype, "scope", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.ObjectId }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", Object)
], Account.prototype, "id_token", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: typeof common_1.SessionState }),
    (0, class_validator_1.IsEnum)(common_1.SessionState),
    __metadata("design:type", String)
], Account.prototype, "session_state", void 0);
exports.Account = Account = __decorate([
    (0, mongoose_1.Schema)({ timestamps: false, versionKey: false })
], Account);
exports.AccountSchema = mongoose_1.SchemaFactory.createForClass(Account);
//# sourceMappingURL=account.entity.js.map