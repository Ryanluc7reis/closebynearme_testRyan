"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommomModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const redis_module_1 = require("./redis/redis.module");
const mongo_module_1 = require("./mongo/mongo.module");
const jwt_module_1 = require("./jwt/jwt.module");
const schedule_1 = require("@nestjs/schedule");
const graphql_module_1 = require("./graphql.module");
const custom_module_1 = require("../custom.module");
const event_emitter_1 = require("@nestjs/event-emitter");
const aws_s3_module_1 = require("./aws/aws-s3.module");
const configModule = config_1.ConfigModule.forRoot({
    isGlobal: true,
});
let CommomModule = class CommomModule {
};
exports.CommomModule = CommomModule;
exports.CommomModule = CommomModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            event_emitter_1.EventEmitterModule.forRoot({
                global: true,
                wildcard: false,
                delimiter: '.',
                newListener: false,
                removeListener: false,
                maxListeners: 10,
                verboseMemoryLeak: false,
                ignoreErrors: false,
            }),
            configModule,
            redis_module_1.RedisModule,
            mongo_module_1.MongoModule,
            custom_module_1.CustomModule,
            aws_s3_module_1.AWSModule,
            jwt_module_1.CustomJwtModule,
            graphql_module_1.GraphqlModule,
        ],
        exports: [
            configModule,
            redis_module_1.RedisModule,
            mongo_module_1.MongoModule,
            custom_module_1.CustomModule,
            aws_s3_module_1.AWSModule,
            jwt_module_1.CustomJwtModule,
            graphql_module_1.GraphqlModule,
        ],
    })
], CommomModule);
//# sourceMappingURL=common.module.js.map