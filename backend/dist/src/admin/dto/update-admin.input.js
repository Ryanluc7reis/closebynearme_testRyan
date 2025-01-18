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
exports.UpdateAdminInput = exports.UpdateAdminData = void 0;
const class_validator_1 = require("class-validator");
const create_admin_input_1 = require("./create-admin.input");
const graphql_1 = require("@nestjs/graphql");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
let UpdateAdminData = class UpdateAdminData extends (0, graphql_1.PartialType)(create_admin_input_1.CreateAdminInput) {
};
exports.UpdateAdminData = UpdateAdminData;
exports.UpdateAdminData = UpdateAdminData = __decorate([
    (0, graphql_1.InputType)()
], UpdateAdminData);
let UpdateAdminInput = class UpdateAdminInput {
};
exports.UpdateAdminInput = UpdateAdminInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_type_object_id_no_deps_1.default),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], UpdateAdminInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => UpdateAdminData),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", UpdateAdminData)
], UpdateAdminInput.prototype, "data", void 0);
exports.UpdateAdminInput = UpdateAdminInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateAdminInput);
//# sourceMappingURL=update-admin.input.js.map