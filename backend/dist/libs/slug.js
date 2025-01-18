"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = void 0;
const lodash_1 = require("lodash");
function slugify(str) {
    return (0, lodash_1.kebabCase)(str);
}
exports.slugify = slugify;
//# sourceMappingURL=slug.js.map