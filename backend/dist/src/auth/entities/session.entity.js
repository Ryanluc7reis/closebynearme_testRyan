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
exports.SessionSchema = exports.Session = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const crypto_1 = require("crypto");
const mongoose_2 = require("mongoose");
const common_1 = require("../../../_protos/common");
let Session = class Session {
};
exports.Session = Session;
__decorate([
    (0, mongoose_1.Prop)({ default: (0, crypto_1.randomUUID)() }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], Session.prototype, "sessionToken", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Array }),
    (0, class_validator_1.IsEnum)(common_1.AccountSchemaAllowed),
    __metadata("design:type", Array)
], Session.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.ObjectId }),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", Object)
], Session.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Session.prototype, "timestamp", void 0);
exports.Session = Session = __decorate([
    (0, mongoose_1.Schema)({ timestamps: false, versionKey: false })
], Session);
exports.SessionSchema = mongoose_1.SchemaFactory.createForClass(Session);
//# sourceMappingURL=session.entity.js.map