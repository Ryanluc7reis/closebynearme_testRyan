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
exports.UpdateLocationInput = exports.UpdateLocationData = void 0;
const create_location_input_1 = require("./create-location.input");
const graphql_1 = require("@nestjs/graphql");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const class_validator_1 = require("class-validator");
let UpdateLocationData = class UpdateLocationData extends (0, graphql_1.PartialType)(create_location_input_1.CreateLocationInput) {
};
exports.UpdateLocationData = UpdateLocationData;
exports.UpdateLocationData = UpdateLocationData = __decorate([
    (0, graphql_1.InputType)()
], UpdateLocationData);
let UpdateLocationInput = class UpdateLocationInput {
};
exports.UpdateLocationInput = UpdateLocationInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_type_object_id_no_deps_1.default),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], UpdateLocationInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => UpdateLocationData),
    (0, class_validator_1.IsNotEmptyObject)(),
    __metadata("design:type", UpdateLocationData)
], UpdateLocationInput.prototype, "data", void 0);
exports.UpdateLocationInput = UpdateLocationInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateLocationInput);
//# sourceMappingURL=update-location.input.js.map