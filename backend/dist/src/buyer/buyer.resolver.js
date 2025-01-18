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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const buyer_service_1 = require("./buyer.service");
const create_buyer_input_1 = require("./dto/create-buyer.input");
const create_buyer_response_1 = require("./dto/create-buyer-response");
const buyer_entity_1 = require("./entities/buyer.entity");
let BuyerResolver = class BuyerResolver {
    constructor(buyerService) {
        this.buyerService = buyerService;
    }
    async createBuyer(createBuyerInput) {
        try {
            await this.buyerService.create(createBuyerInput);
            return {
                message: 'Buyer created successfully!',
                success: true,
            };
        }
        catch (error) {
            console.error('Error creating buyer:', error.message);
            return {
                message: `Failed to create buyer: ${error.message}`,
                success: false,
            };
        }
    }
    async findBuyers() {
        return this.buyerService.findAll();
    }
    async deleteBuyer(id) {
        try {
            await this.buyerService.deleteBuyerById(id);
            return {
                message: 'Buyer deleted successfully!',
                success: true,
            };
        }
        catch (error) {
            console.error('Error deleting buyer:', error.message);
            return {
                message: `Failed to delete buyer: ${error.message}`,
                success: false,
            };
        }
    }
};
exports.BuyerResolver = BuyerResolver;
__decorate([
    (0, graphql_1.Mutation)(() => create_buyer_response_1.CreateBuyerResponse),
    __param(0, (0, graphql_1.Args)('createBuyerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_buyer_input_1.CreateBuyerInput]),
    __metadata("design:returntype", Promise)
], BuyerResolver.prototype, "createBuyer", null);
__decorate([
    (0, graphql_1.Query)(() => [buyer_entity_1.Buyer]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BuyerResolver.prototype, "findBuyers", null);
__decorate([
    (0, graphql_1.Mutation)(() => create_buyer_response_1.CreateBuyerResponse),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BuyerResolver.prototype, "deleteBuyer", null);
exports.BuyerResolver = BuyerResolver = __decorate([
    (0, graphql_1.Resolver)(() => buyer_entity_1.Buyer),
    __metadata("design:paramtypes", [buyer_service_1.BuyerService])
], BuyerResolver);
//# sourceMappingURL=buyer.resolver.js.map