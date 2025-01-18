"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConfigService = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("../config");
const mongoPaginate = require("mongoose-paginate-v2");
const common_1 = require("@nestjs/common");
const mongoAgregatePaginate = require('mongoose-aggregate-paginate-v2');
let MongoConfigService = class MongoConfigService {
    createMongooseOptions() {
        mongoose_1.default.plugin(mongoPaginate);
        mongoose_1.default.plugin(mongoAgregatePaginate);
        return {
            uri: config_1.default.DB_URI,
            dbName: config_1.default.DB_NAME,
        };
    }
};
exports.MongoConfigService = MongoConfigService;
exports.MongoConfigService = MongoConfigService = __decorate([
    (0, common_1.Injectable)()
], MongoConfigService);
//# sourceMappingURL=mongo.service.js.map