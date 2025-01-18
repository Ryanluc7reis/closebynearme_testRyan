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
exports.UpdateFaqInput = exports.UpdateFaqData = void 0;
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const create_faq_input_1 = require("./create-faq.input");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let UpdateFaqData = class UpdateFaqData extends (0, graphql_1.PartialType)(create_faq_input_1.CreateFaqInput) {
};
exports.UpdateFaqData = UpdateFaqData;
exports.UpdateFaqData = UpdateFaqData = __decorate([
    (0, graphql_1.InputType)()
], UpdateFaqData);
let UpdateFaqInput = class UpdateFaqInput {
};
exports.UpdateFaqInput = UpdateFaqInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_type_object_id_no_deps_1.default),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], UpdateFaqInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => UpdateFaqData),
    (0, class_validator_1.IsNotEmptyObject)(),
    __metadata("design:type", UpdateFaqData)
], UpdateFaqInput.prototype, "data", void 0);
exports.UpdateFaqInput = UpdateFaqInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateFaqInput);
//# sourceMappingURL=update-faq.input.js.map