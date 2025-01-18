"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryTypeTree = void 0;
const graphql_1 = require("@nestjs/graphql");
var CategoryTypeTree;
(function (CategoryTypeTree) {
    CategoryTypeTree["MAIN"] = "MAIN";
    CategoryTypeTree["PARENT"] = "PARENT";
    CategoryTypeTree["CHILDREN"] = "CHILDREN";
})(CategoryTypeTree || (exports.CategoryTypeTree = CategoryTypeTree = {}));
(0, graphql_1.registerEnumType)(CategoryTypeTree, {
    name: 'CategoryTypeTree',
});
//# sourceMappingURL=category.enum.js.map