"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const buyer_service_1 = require("./buyer.service");
const buyer_resolver_1 = require("./buyer.resolver");
const buyer_entity_1 = require("./entities/buyer.entity");
let BuyerModule = class BuyerModule {
};
exports.BuyerModule = BuyerModule;
exports.BuyerModule = BuyerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: buyer_entity_1.Buyer.name, schema: buyer_entity_1.BuyerSchema },
            ]),
        ],
        providers: [buyer_service_1.BuyerService, buyer_resolver_1.BuyerResolver],
    })
], BuyerModule);
//# sourceMappingURL=buyer.module.js.map