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
exports.AddressInfoSchema = exports.AddressInfo = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
let AddressInfo = class AddressInfo {
};
exports.AddressInfo = AddressInfo;
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], AddressInfo.prototype, "line1", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], AddressInfo.prototype, "line2", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AddressInfo.prototype, "fullAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AddressInfo.prototype, "cityName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AddressInfo.prototype, "postalCode", void 0);
exports.AddressInfo = AddressInfo = __decorate([
    (0, graphql_1.ObjectType)()
], AddressInfo);
exports.AddressInfoSchema = mongoose_1.SchemaFactory.createForClass(AddressInfo);
//# sourceMappingURL=address-info.entity.js.map