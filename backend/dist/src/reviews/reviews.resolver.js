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
exports.ReviewsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const reviews_service_1 = require("./reviews.service");
const review_entity_1 = require("./entities/review.entity");
const create_review_input_1 = require("./dto/create-review.input");
const update_review_input_1 = require("./dto/update-review.input");
const review_paginate_1 = require("./entities/review.paginate");
const search_base_1 = require("../../_protos/classes/search.base");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const auth_guard_1 = require("../auth/auth.guard");
const common_1 = require("@nestjs/common");
let ReviewsResolver = class ReviewsResolver {
    constructor(service) {
        this.service = service;
    }
    createReview(input) {
        return this.service.create(input);
    }
    findAll(search, companyId) {
        return this.service.findAll(search, companyId);
    }
    updateReview(input) {
        return this.service.update(input);
    }
    removeReview(id) {
        return this.service.remove(id);
    }
    toggleStatus(id) {
        return this.service.toggleStatus(id);
    }
};
exports.ReviewsResolver = ReviewsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => create_review_input_1.CreateReviewInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReviewsResolver.prototype, "createReview", null);
__decorate([
    (0, graphql_1.Query)(() => review_paginate_1.ReviewsPaginateResponse, { name: 'listReviewsForCompany' }),
    __param(0, (0, graphql_1.Args)('search')),
    __param(1, (0, graphql_1.Args)('companyId', {
        type: () => graphql_type_object_id_no_deps_1.default,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_base_1.SearchBaseInput, Object]),
    __metadata("design:returntype", void 0)
], ReviewsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => update_review_input_1.UpdateReviewInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReviewsResolver.prototype, "updateReview", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReviewsResolver.prototype, "removeReview", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, {
        name: 'toggleReviewStatus',
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReviewsResolver.prototype, "toggleStatus", null);
exports.ReviewsResolver = ReviewsResolver = __decorate([
    (0, graphql_1.Resolver)(() => review_entity_1.Review),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService])
], ReviewsResolver);
//# sourceMappingURL=reviews.resolver.js.map