"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomJwtModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("../config");
const jwt_strategy_1 = require("./jwt.strategy");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_service_1 = require("./jwt.service");
const session_entity_1 = require("../../../auth/entities/session.entity");
const account_entity_1 = require("../../../auth/entities/account.entity");
const JWTModule = jwt_1.JwtModule.register({
    secret: config_1.default.JWT_ACCESSTOKEN_SECRET,
});
let CustomJwtModule = class CustomJwtModule {
};
exports.CustomJwtModule = CustomJwtModule;
exports.CustomJwtModule = CustomJwtModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: account_entity_1.Account.name,
                    schema: account_entity_1.AccountSchema,
                },
                {
                    name: session_entity_1.Session.name,
                    schema: session_entity_1.SessionSchema,
                },
            ]),
            JWTModule,
        ],
        providers: [jwt_service_1.JwtService, jwt_strategy_1.JwtStrategy],
        exports: [jwt_service_1.JwtService, jwt_strategy_1.JwtStrategy],
    })
], CustomJwtModule);
//# sourceMappingURL=jwt.module.js.map