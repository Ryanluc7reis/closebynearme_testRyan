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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_entity_1 = require("./entities/product.entity");
const common_2 = require("../../_protos/common");
const slug_1 = require("../../libs/slug");
const amenities_entity_1 = require("./entities/amenities.entity");
let ProductsService = class ProductsService {
    constructor(model, amenitiesModel) {
        this.model = model;
        this.amenitiesModel = amenitiesModel;
    }
    async slugValidator(name) {
        const slug = (0, slug_1.slugify)(name);
        const document = await this.findOne({
            slug,
            disabled: false,
        }, true);
        return {
            slug,
            document,
            alreadyExist: !!document,
        };
    }
    async create(input) {
        const { alreadyExist, slug } = await this.slugValidator(input.name);
        if (alreadyExist) {
            throw new common_1.BadRequestException('Ya existe', 'Already exist');
        }
        const document = await new this.model({
            ...input,
            slug,
        }).save();
        return document;
    }
    async getAmenities(input) {
        return await this.amenitiesModel.find({ _id: { $in: input } });
    }
    async findAmenitiesAll({ all, page, perPage, q }) {
        const handleFilter = () => {
            let req = {};
            if (q !== '') {
                const regex = { $regex: new RegExp(q, 'gi') };
                req = {
                    ...req,
                    $or: [
                        {
                            name: regex,
                        },
                        {
                            description: regex,
                        },
                    ],
                };
            }
            return req;
        };
        const options = {
            limit: perPage,
            page,
            pagination: !all,
            sort: {
                name: 1,
            },
        };
        return await this.amenitiesModel.paginate(handleFilter(), options);
    }
    async createAmenities(input) {
        return await new this.amenitiesModel({ ...input }).save();
    }
    async updateAmenities({ _id, data }) {
        const model = await this.amenitiesModel.findOne({ _id });
        await model.updateOne({
            $set: {
                ...data,
            },
        });
        return 'Updated';
    }
    async findAll({ all, page, perPage, q, status, companyId, categoriesId, locationId, }) {
        const handleFilter = () => {
            let req = {
                disabled: false,
            };
            if (q !== '') {
                const regex = { $regex: new RegExp(q, 'gi') };
                req = {
                    ...req,
                    $or: [
                        {
                            name: regex,
                            slug: regex,
                        },
                    ],
                };
            }
            if (status !== common_2.StatusAllowed.EMPTY) {
                req = { ...req, status };
            }
            if (companyId) {
                req = { ...req, companyId };
            }
            if (categoriesId?.length) {
                console.log(categoriesId);
                req = { ...req, categoryId: { $in: categoriesId } };
            }
            if (locationId) {
                req = { ...req, locationId };
            }
            return req;
        };
        const options = {
            limit: perPage,
            page,
            pagination: !all,
            sort: {
                name: 1,
            },
        };
        return await this.model.paginate(handleFilter(), options);
    }
    async findByFilterAll({ all, page, perPage, q, status, companyId, categoriesId, }, slug) {
        const handleFilter = () => {
            let req = {
                disabled: false,
            };
            if (q !== '') {
                const regex = { $regex: new RegExp(q, 'gi') };
                req = {
                    ...req,
                    $or: [
                        {
                            name: regex,
                            slug: regex,
                        },
                    ],
                };
            }
            if (status !== common_2.StatusAllowed.EMPTY) {
                req = { ...req, status };
            }
            if (companyId) {
                req = { ...req, companyId };
            }
            if (categoriesId?.length) {
                req = { ...req, categoryId: { $in: categoriesId } };
            }
            if (slug) {
                req = { ...req, slug: { $ne: slug } };
            }
            return req;
        };
        const options = {
            limit: perPage,
            page,
            pagination: !all,
            sort: {
                name: 1,
            },
        };
        return await this.model.paginate(handleFilter(), options);
    }
    async findOne(option, skipError = false) {
        const model = await this.model.findOne({
            ...option,
        });
        if (!model && !skipError) {
            throw new common_1.NotFoundException('No encontrado', 'Not found');
        }
        return model;
    }
    async update({ _id, data }) {
        const model = await this.findOne({ _id, disabled: false });
        let slug = model.slug;
        if (data.name !== model.name) {
            const item = await this.slugValidator(data.name);
            slug = item.slug;
            if (item.alreadyExist) {
                throw new common_1.BadRequestException('Ya existe', 'Already exist');
            }
        }
        await model.updateOne({
            $set: {
                ...data,
                slug,
            },
        });
        return 'Updated';
    }
    async toggleStatus(_id) {
        const model = await this.findOne({ _id, disabled: false });
        await model.updateOne({
            $set: {
                status: model.status === common_2.Status.ACTIVE ? common_2.Status.INACTIVE : common_2.Status.ACTIVE,
            },
        });
        return 'Updated status';
    }
    async remove(_id) {
        const model = await this.findOne({ _id, disabled: false });
        await model.updateOne({
            $set: {
                name: 'Product-Deleted',
                slug: `${model.slug}-deleted`,
                disabled: true,
                status: common_2.Status.INACTIVE,
            },
        });
        return 'Removed';
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_entity_1.Product.name)),
    __param(1, (0, mongoose_1.InjectModel)(amenities_entity_1.Amenities.name)),
    __metadata("design:paramtypes", [Object, Object])
], ProductsService);
//# sourceMappingURL=products.service.js.map