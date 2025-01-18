"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentClient = exports.CurrentAdmin = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.CurrentAdmin = (0, common_1.createParamDecorator)((data, context) => {
    const type = context.getType();
    if (type === 'http') {
        const request = context.switchToHttp().getRequest();
        return request.user;
    }
    const ctx = graphql_1.GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
});
exports.CurrentClient = (0, common_1.createParamDecorator)((data, context) => {
    const type = context.getType();
    if (type === 'http') {
        const request = context.switchToHttp().getRequest();
        return request.user;
    }
    const ctx = graphql_1.GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
});
//# sourceMappingURL=auth.decorator.js.map