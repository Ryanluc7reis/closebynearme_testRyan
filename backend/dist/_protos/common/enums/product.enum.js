"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPriceType = void 0;
const graphql_1 = require("@nestjs/graphql");
var ProductPriceType;
(function (ProductPriceType) {
    ProductPriceType["DAY"] = "DAY";
    ProductPriceType["HOUR"] = "HOUR";
})(ProductPriceType || (exports.ProductPriceType = ProductPriceType = {}));
(0, graphql_1.registerEnumType)(ProductPriceType, {
    name: 'ProductPriceType',
});
//# sourceMappingURL=product.enum.js.map