"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesTypeAllowed = exports.ArticlesType = exports.TagsTypeAllowed = exports.TagsType = void 0;
const graphql_1 = require("@nestjs/graphql");
var TagsType;
(function (TagsType) {
    TagsType["TAG"] = "TAG";
    TagsType["KEYWORD"] = "KEYWORD";
    TagsType["DEFAULT"] = "DEFAULT";
})(TagsType || (exports.TagsType = TagsType = {}));
var TagsTypeAllowed;
(function (TagsTypeAllowed) {
    TagsTypeAllowed["TAG"] = "TAG";
    TagsTypeAllowed["KEYWORD"] = "KEYWORD";
    TagsTypeAllowed["DEFAULT"] = "DEFAULT";
    TagsTypeAllowed["EMPTY"] = "";
})(TagsTypeAllowed || (exports.TagsTypeAllowed = TagsTypeAllowed = {}));
var ArticlesType;
(function (ArticlesType) {
    ArticlesType["GUIDE"] = "GUIDE";
    ArticlesType["DEFAULT"] = "DEFAULT";
})(ArticlesType || (exports.ArticlesType = ArticlesType = {}));
var ArticlesTypeAllowed;
(function (ArticlesTypeAllowed) {
    ArticlesTypeAllowed["GUIDE"] = "GUIDE";
    ArticlesTypeAllowed["DEFAULT"] = "DEFAULT";
    ArticlesTypeAllowed["EMPTY"] = "";
})(ArticlesTypeAllowed || (exports.ArticlesTypeAllowed = ArticlesTypeAllowed = {}));
(0, graphql_1.registerEnumType)(ArticlesType, {
    name: 'ArticlesType',
});
(0, graphql_1.registerEnumType)(ArticlesTypeAllowed, {
    name: 'ArticlesTypeAllowed',
});
(0, graphql_1.registerEnumType)(TagsType, {
    name: 'TagsType',
});
(0, graphql_1.registerEnumType)(TagsTypeAllowed, {
    name: 'TagsTypeAllowed',
});
//# sourceMappingURL=tags.enum.js.map