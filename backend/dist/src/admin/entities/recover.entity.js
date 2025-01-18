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
exports.RecoverSchema = exports.Recover = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const class_validator_1 = require("class-validator");
const admin_entity_1 = require("./admin.entity");
const common_1 = require("../../../_protos/common");
let Recover = class Recover {
};
exports.Recover = Recover;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, ref: admin_entity_1.Admin.name }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], Recover.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsUUID)('4'),
    __metadata("design:type", String)
], Recover.prototype, "secureId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Array }),
    (0, class_validator_1.IsEnum)(common_1.Roles),
    __metadata("design:type", Array)
], Recover.prototype, "profile", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date(), expires: 3600 }),
    __metadata("design:type", Date)
], Recover.prototype, "createdAt", void 0);
exports.Recover = Recover = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        versionKey: false,
        collection: 'recover',
    })
], Recover);
exports.RecoverSchema = mongoose_1.SchemaFactory.createForClass(Recover);
//# sourceMappingURL=recover.entity.js.map