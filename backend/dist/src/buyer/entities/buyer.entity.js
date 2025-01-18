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
exports.BuyerSchema = exports.Buyer = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const common_1 = require("../../../_protos/common");
const graphql_1 = require("@nestjs/graphql");
let Buyer = class Buyer {
};
exports.Buyer = Buyer;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Object)
], Buyer.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Buyer.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)({ required: true, unique: true, trim: true }),
    __metadata("design:type", String)
], Buyer.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Buyer.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Array)
], Buyer.prototype, "Additional_Details", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Buyer.prototype, "Areas_Of_Interest", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Buyer.prototype, "Delivery_Method", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Buyer.prototype, "Emotional_State", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Buyer.prototype, "Experience_Level", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Buyer.prototype, "Goals_And_Expectations", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Buyer.prototype, "Personality_Match", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Buyer.prototype, "Preferred_Psychic_Services", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Buyer.prototype, "Scheduling_Preferences", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Buyer.prototype, "Spiritual_Preferences", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Buyer.prototype, "Subscription_Preferences", void 0);
__decorate([
    (0, graphql_1.Field)(() => [common_1.AccountSchemaAllowed]),
    (0, mongoose_1.Prop)({ required: true, type: [String] }),
    (0, class_validator_1.IsEnum)(common_1.AccountSchemaAllowed),
    __metadata("design:type", Array)
], Buyer.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_1.Status),
    (0, mongoose_1.Prop)({ default: common_1.Status.ACTIVE, type: typeof common_1.Status }),
    (0, class_validator_1.IsEnum)(common_1.Status),
    __metadata("design:type", String)
], Buyer.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Buyer.prototype, "createdAt", void 0);
exports.Buyer = Buyer = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, mongoose_1.Schema)({
        timestamps: true,
        versionKey: false,
    })
], Buyer);
exports.BuyerSchema = mongoose_1.SchemaFactory.createForClass(Buyer);
//# sourceMappingURL=buyer.entity.js.map