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
exports.UpdateAmenitiesInput = exports.UpdateAmenitiesData = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const create_amenities_input_1 = require("./create-amenities.input");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
let UpdateAmenitiesData = class UpdateAmenitiesData extends (0, graphql_1.PartialType)(create_amenities_input_1.CreateAmenitiesInput) {
};
exports.UpdateAmenitiesData = UpdateAmenitiesData;
exports.UpdateAmenitiesData = UpdateAmenitiesData = __decorate([
    (0, graphql_1.InputType)()
], UpdateAmenitiesData);
let UpdateAmenitiesInput = class UpdateAmenitiesInput {
};
exports.UpdateAmenitiesInput = UpdateAmenitiesInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_type_object_id_no_deps_1.default),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], UpdateAmenitiesInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => UpdateAmenitiesData),
    (0, class_validator_1.IsNotEmptyObject)(),
    __metadata("design:type", UpdateAmenitiesData)
], UpdateAmenitiesInput.prototype, "data", void 0);
exports.UpdateAmenitiesInput = UpdateAmenitiesInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateAmenitiesInput);
//# sourceMappingURL=update-amenities.input.js.map