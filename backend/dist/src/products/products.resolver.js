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
exports.ProductsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const products_service_1 = require("./products.service");
const product_entity_1 = require("./entities/product.entity");
const create_product_input_1 = require("./dto/create-product.input");
const update_product_input_1 = require("./dto/update-product.input");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const products_paginate_1 = require("./entities/products.paginate");
const search_product_input_1 = require("./dto/search-product.input");
const create_amenities_input_1 = require("./dto/create-amenities.input");
const update_amenities_input_1 = require("./dto/update-amenities.input");
const amenities_entity_1 = require("./entities/amenities.entity");
const product_populate_1 = require("./entities/product-populate");
const common_2 = require("../../_protos/common");
const search_base_1 = require("../../_protos/classes/search.base");
let ProductsResolver = class ProductsResolver {
    async createProduct(input) {
        return (await this.service.create(input))._id.toString();
    }
    findAll(search) {
        return this.service.findAll(search);
    }
    async createAmenities(input) {
        return (await this.service.createAmenities(input))._id.toString();
    }
    async updateAmenities(input) {
        return await this.service.updateAmenities(input);
    }
    findAmenities(ids) {
        return this.service.getAmenities(ids);
    }
    listAmenitiesPaginated(search) {
        return this.service.findAmenitiesAll(search);
    }
    findOne(_id) {
        return this.service.findOne({ _id });
    }
    async findOneProductPopulate(slug) {
        return (await this.service.findOne({
            slug,
            status: common_2.Status.ACTIVE,
        })).populate(['categoryId', 'locationId', 'companyId', 'amenities']);
    }
    async listProductsPopulateSameCompany(search, slug) {
        return await this.service.findByFilterAll({
            ...search,
        }, slug);
    }
    updateProduct(input) {
        return this.service.update(input);
    }
    removeProduct(id) {
        return this.service.remove(id);
    }
    toggleStatus(id) {
        return this.service.toggleStatus(id);
    }
};
exports.ProductsResolver = ProductsResolver;
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", products_service_1.ProductsService)
], ProductsResolver.prototype, "service", void 0);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => create_product_input_1.CreateProductInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Query)(() => products_paginate_1.ProductsPaginateResponse, { name: 'listProductsPaginated' }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('search', {
        type: () => search_product_input_1.SearchProductInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_amenities_input_1.CreateAmenitiesInput]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "createAmenities", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => update_amenities_input_1.UpdateAmenitiesInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "updateAmenities", null);
__decorate([
    (0, graphql_1.Query)(() => [amenities_entity_1.Amenities]),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('ids', { type: () => [graphql_type_object_id_no_deps_1.default] })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "findAmenities", null);
__decorate([
    (0, graphql_1.Query)(() => products_paginate_1.AmenitiesPaginateResponse),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_base_1.SearchBaseInput]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "listAmenitiesPaginated", null);
__decorate([
    (0, graphql_1.Query)(() => product_entity_1.Product, { name: 'findOneProduct' }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => product_populate_1.ProductPopulate, { name: 'findOneProductPopulate' }),
    __param(0, (0, graphql_1.Args)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "findOneProductPopulate", null);
__decorate([
    (0, graphql_1.Query)(() => products_paginate_1.ProductsPaginateResponse, { name: 'listProductsSameCompany' }),
    __param(0, (0, graphql_1.Args)('search', {
        type: () => search_product_input_1.SearchProductInput,
    })),
    __param(1, (0, graphql_1.Args)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "listProductsPopulateSameCompany", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => update_product_input_1.UpdateProductInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "updateProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "removeProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, {
        name: 'toggleProductStatus',
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "toggleStatus", null);
exports.ProductsResolver = ProductsResolver = __decorate([
    (0, graphql_1.Resolver)(() => product_entity_1.Product)
], ProductsResolver);
//# sourceMappingURL=products.resolver.js.map