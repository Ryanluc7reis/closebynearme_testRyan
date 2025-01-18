"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const mongoose_1 = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const account_entity_1 = require("../../../auth/entities/account.entity");
const bcrypt = require("bcryptjs");
const session_entity_1 = require("../../../auth/entities/session.entity");
const common_2 = require("../../../../_protos/common");
const redis_service_1 = require("../redis/redis.service");
const moment = require("moment");
let JwtService = class JwtService {
    constructor(jwt) {
        this.jwt = jwt;
    }
    async decode(token) {
        return this.jwt.decode(token, null);
    }
    async validateSession(decoded) {
        const name_space = `TOKEN:*:${decoded.token}`;
        const sessions = await this.cacheService.getItemsByKey(name_space);
        if (!sessions[0]) {
            const session = await this.sessionModel.findOne({
                sessionToken: decoded.token,
            });
            if (!session) {
                return undefined;
            }
            await this.accountModel.updateOne({ id_token: session._id }, {
                $set: {
                    access_token: '',
                    scope: [],
                    id_token: null,
                    session_state: common_2.SessionState.EXPIRED,
                },
            });
            await session.deleteOne();
            return undefined;
        }
        const session = await this.cacheService.get(sessions[0]);
        return session;
    }
    async generateAccessToken(session, expires_at) {
        const objToken = {
            token: session.sessionToken,
            profile: session.role,
            create: new Date(),
            expires_at,
        };
        const accessToken = this.jwt.sign(objToken);
        await this.cacheService.deleteItemsByKey(`TOKEN:${session.userId}:*`);
        await this.cacheService.set(`TOKEN:${session.userId}:${session.sessionToken}`, session, moment(expires_at).diff(moment(), 'seconds'));
        return accessToken;
    }
    isPasswordValid(password, userPassword) {
        return bcrypt.compareSync(password, userPassword);
    }
    encodePassword(password) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }
    verifySessionToken(token) {
        try {
            return this.jwt.verify(token);
        }
        catch (err) {
            return undefined;
        }
    }
};
exports.JwtService = JwtService;
__decorate([
    (0, mongoose_2.InjectModel)(account_entity_1.Account.name),
    __metadata("design:type", mongoose_1.Model)
], JwtService.prototype, "accountModel", void 0);
__decorate([
    (0, mongoose_2.InjectModel)(session_entity_1.Session.name),
    __metadata("design:type", mongoose_1.Model)
], JwtService.prototype, "sessionModel", void 0);
__decorate([
    (0, common_1.Inject)(redis_service_1.CacheService),
    __metadata("design:type", redis_service_1.CacheService)
], JwtService.prototype, "cacheService", void 0);
exports.JwtService = JwtService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], JwtService);
//# sourceMappingURL=jwt.service.js.map