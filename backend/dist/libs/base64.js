"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64UnEncript = exports.Base64Encript = void 0;
const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
function Base64Encript(text) {
    if (!base64regex.test(text)) {
        return Buffer.from(text).toString('base64');
    }
    else {
        return text;
    }
}
exports.Base64Encript = Base64Encript;
function Base64UnEncript(text) {
    if (base64regex.test(text)) {
        return Buffer.from(text, 'base64').toString('ascii');
    }
    else {
        return text;
    }
}
exports.Base64UnEncript = Base64UnEncript;
//# sourceMappingURL=base64.js.map