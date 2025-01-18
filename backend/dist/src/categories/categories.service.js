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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const category_entity_1 = require("./entities/category.entity");
const common_2 = require("../../_protos/common");
const slug_1 = require("../../libs/slug");
const transformArrayToJson_1 = require("../../libs/transformArrayToJson");
const event_emitter_1 = require("@nestjs/event-emitter");
const event_enum_1 = require("../../_protos/common/enums/event.enum");
const event_listener_dto_1 = require("../../_protos/common/dto/event.listener.dto");
let CategoriesService = class CategoriesService {
    constructor(model, eventEmitter) {
        this.model = model;
        this.eventEmitter = eventEmitter;
    }
    async slugValidator(name) {
        const slug = (0, slug_1.slugify)(name);
        const exist = await this.findOne({
            slug,
            disabled: false,
        }, true);
        if (exist) {
            throw new common_1.BadRequestException('Ya existe', 'Already exist');
        }
        return slug;
    }
    async create(input) {
        const slug = await this.slugValidator(input.name);
        const document = await new this.model({
            ...input,
            slug,
        }).save();
        return document._id.toString();
    }
    async findAll({ all, page, perPage, q, status }) {
        const handleFilter = () => {
            let req = {
                disabled: false,
            };
            if (q !== '') {
                req = {
                    ...req,
                    $or: [
                        { name: { $regex: new RegExp(q, 'gi') } },
                        { slug: { $regex: new RegExp(q, 'gi') } },
                    ],
                };
            }
            if (status !== common_2.StatusAllowed.EMPTY) {
                req = { ...req, status };
            }
            return req;
        };
        const options = {
            limit: perPage,
            page,
            pagination: !all,
            sort: {
                createdAt: -1,
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
            slug = await this.slugValidator(data.name);
        }
        await model.updateOne({
            $set: {
                ...data,
                slug,
            },
        });
        if (data.name !== model.name) {
            await this.eventEmitter.emitAsync(event_enum_1.EventTypeName.CategoryNameUpdated, {
                payload: {
                    categoryId: model._id,
                    categories: await this.model
                        .find({
                        disabled: false,
                        status: common_2.Status.ACTIVE,
                    })
                        .select('_id name slug'),
                },
            });
        }
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
                name: 'Category-Deleted',
                slug: `${model.slug}-deleted`,
                disabled: true,
                status: common_2.Status.INACTIVE,
            },
        });
        return 'Removed';
    }
    async processCategoryUpdate() { }
    async processCsv(file, _id) {
        const model = await this.findOne({ _id, disabled: false });
        const data = (await (0, transformArrayToJson_1.transformToJSON)(file.buffer));
        const [locations] = await this.eventEmitter.emitAsync(event_enum_1.EventTypeName.LocationDataUpload, {
            type: event_listener_dto_1.EventType.LOCATIONS,
            payload: {
                data,
                categoriesId: [model._id],
                categories: [
                    {
                        name: model.name,
                        slug: model.slug,
                    },
                ],
            },
        });
        await this.eventEmitter.emitAsync(event_enum_1.EventTypeName.CompanyUploadCreate, {
            type: event_listener_dto_1.EventType.COMPANIES,
            payload: {
                data,
                locations,
                categoriesId: [model._id],
                categories: [
                    {
                        name: model.name,
                        slug: model.slug,
                    },
                ],
            },
        });
        await model.updateOne({
            status: common_2.Status.ACTIVE,
        });
        return 'Success';
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_entity_1.Category.name)),
    __metadata("design:paramtypes", [Object, event_emitter_1.EventEmitter2])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map