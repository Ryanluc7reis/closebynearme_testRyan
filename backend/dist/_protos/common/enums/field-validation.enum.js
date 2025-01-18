"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldValidation = void 0;
const graphql_1 = require("@nestjs/graphql");
var FieldValidation;
(function (FieldValidation) {
    FieldValidation["email"] = "email";
    FieldValidation["nickname"] = "nickname";
    FieldValidation["phone"] = "phone";
})(FieldValidation || (exports.FieldValidation = FieldValidation = {}));
(0, graphql_1.registerEnumType)(FieldValidation, {
    name: 'FieldValidation',
});
//# sourceMappingURL=field-validation.enum.js.map