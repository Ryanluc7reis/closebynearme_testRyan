"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenderAllowed = exports.Gender = void 0;
const graphql_1 = require("@nestjs/graphql");
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender || (exports.Gender = Gender = {}));
var GenderAllowed;
(function (GenderAllowed) {
    GenderAllowed["MALE"] = "MALE";
    GenderAllowed["FEMALE"] = "FEMALE";
    GenderAllowed["OTHER"] = "OTHER";
    GenderAllowed["EMPTY"] = "";
})(GenderAllowed || (exports.GenderAllowed = GenderAllowed = {}));
(0, graphql_1.registerEnumType)(Gender, {
    name: 'Gender',
});
(0, graphql_1.registerEnumType)(GenderAllowed, {
    name: 'GenderAllowed',
});
//# sourceMappingURL=gender.enum.js.map