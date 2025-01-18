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
exports.CreateBuyerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const common_1 = require("../../../_protos/common");
let CreateBuyerInput = class CreateBuyerInput {
};
exports.CreateBuyerInput = CreateBuyerInput;
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBuyerInput.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBuyerInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBuyerInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateBuyerInput.prototype, "Additional_Details", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateBuyerInput.prototype, "Areas_Of_Interest", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateBuyerInput.prototype, "Delivery_Method", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateBuyerInput.prototype, "Emotional_State", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateBuyerInput.prototype, "Experience_Level", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateBuyerInput.prototype, "Goals_And_Expectations", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateBuyerInput.prototype, "Personality_Match", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateBuyerInput.prototype, "Preferred_Psychic_Services", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateBuyerInput.prototype, "Scheduling_Preferences", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateBuyerInput.prototype, "Spiritual_Preferences", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateBuyerInput.prototype, "Subscription_Preferences", void 0);
__decorate([
    (0, graphql_1.Field)(() => [common_1.AccountSchemaAllowed], {
        defaultValue: [common_1.AccountSchemaAllowed.BUYER],
    }),
    (0, class_validator_1.IsEnum)(common_1.AccountSchemaAllowed, { each: true }),
    __metadata("design:type", Array)
], CreateBuyerInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateBuyerInput.prototype, "createdAt", void 0);
exports.CreateBuyerInput = CreateBuyerInput = __decorate([
    (0, graphql_1.InputType)()
], CreateBuyerInput);
//# sourceMappingURL=create-buyer.input.js.map