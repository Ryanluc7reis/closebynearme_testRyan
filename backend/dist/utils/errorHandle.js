"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCode = exports.handleErrorFormat = void 0;
function handleErrorFormat(errors) {
    return errors.map((err) => {
        const { status } = err.extensions;
        const message = JSON.parse(err.message);
        return {
            message,
            status: status || 400,
        };
    });
}
exports.handleErrorFormat = handleErrorFormat;
function generateCode() {
    const unix = Math.floor(Date.now() / 1000);
    const referralCode = String(unix);
    const ini = referralCode.length - 6;
    return referralCode.substring(ini, referralCode.length);
}
exports.generateCode = generateCode;
//# sourceMappingURL=errorHandle.js.map