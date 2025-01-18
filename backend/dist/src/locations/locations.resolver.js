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
exports.LocationsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const locations_service_1 = require("./locations.service");
const location_entity_1 = require("./entities/location.entity");
const create_location_input_1 = require("./dto/create-location.input");
const update_location_input_1 = require("./dto/update-location.input");
const search_base_1 = require("../../_protos/classes/search.base");
const locations_paginate_1 = require("./entities/locations.paginate");
const graphql_type_object_id_no_deps_1 = require("graphql-type-object-id-no-deps");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
let LocationsResolver = class LocationsResolver {
    constructor(service) {
        this.service = service;
    }
    async createLocation(input) {
        return (await this.service.create(input))._id;
    }
    findAll(search) {
        return this.service.findAll(search);
    }
    updateLocation(input) {
        return this.service.update(input);
    }
    removeLocation(id) {
        return this.service.remove(id);
    }
    toggleStatus(id) {
        return this.service.toggleStatus(id);
    }
};
exports.LocationsResolver = LocationsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => create_location_input_1.CreateLocationInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocationsResolver.prototype, "createLocation", null);
__decorate([
    (0, graphql_1.Query)(() => locations_paginate_1.LocationsPaginateResponse, { name: 'listLocationsPaginated' }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_base_1.SearchBaseInput]),
    __metadata("design:returntype", void 0)
], LocationsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('input', {
        type: () => update_location_input_1.UpdateLocationInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LocationsResolver.prototype, "updateLocation", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LocationsResolver.prototype, "removeLocation", null);
__decorate([
    (0, graphql_1.Mutation)(() => String, {
        name: 'toggleLocationStatus',
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_type_object_id_no_deps_1.default })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LocationsResolver.prototype, "toggleStatus", null);
exports.LocationsResolver = LocationsResolver = __decorate([
    (0, graphql_1.Resolver)(() => location_entity_1.Location),
    __metadata("design:paramtypes", [locations_service_1.LocationsService])
], LocationsResolver);
//# sourceMappingURL=locations.resolver.js.map