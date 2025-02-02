"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoModule = exports.MongoConfigModule = void 0;
const common_1 = require("@nestjs/common");
const mongo_service_1 = require("../../../common/modules/mongo/mongo.service");
const mongoose_1 = require("@nestjs/mongoose");
let MongoConfigModule = class MongoConfigModule {
};
exports.MongoConfigModule = MongoConfigModule;
exports.MongoConfigModule = MongoConfigModule = __decorate([
    (0, common_1.Module)({
        providers: [mongo_service_1.MongoConfigService],
        exports: [mongo_service_1.MongoConfigService],
    })
], MongoConfigModule);
exports.MongoModule = mongoose_1.MongooseModule.forRootAsync({
    imports: [MongoConfigModule],
    useExisting: mongo_service_1.MongoConfigService,
});
//# sourceMappingURL=mongo.module.js.map