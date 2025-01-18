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
exports.LocationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const location_entity_1 = require("./entities/location.entity");
const common_2 = require("../../_protos/common");
const slug_1 = require("../../libs/slug");
const event_emitter_1 = require("@nestjs/event-emitter");
const event_enum_1 = require("../../_protos/common/enums/event.enum");
const event_listener_dto_1 = require("../../_protos/common/dto/event.listener.dto");
let LocationsService = class LocationsService {
    constructor(model) {
        this.model = model;
    }
    async handleBigDataProcess({ payload, type, }) {
        if (type !== event_listener_dto_1.EventType.LOCATIONS) {
            throw new common_1.BadRequestException('Evento no valido', 'Event not valid');
        }
        const storageSlugs = [];
        const storage = new Map();
        payload.data.forEach((item) => {
            const slug = (0, slug_1.slugify)(item.keyword.trim());
            storage.set(slug, {
                insertOne: {
                    document: {
                        name: item.keyword.trim(),
                        image: '',
                        status: common_2.Status.ACTIVE,
                        slug,
                        categoriesId: payload.categoriesId,
                        categories: payload.categories,
                    },
                },
            });
        });
        let exists = await this.model.find({
            slug: { $in: [...storage.keys()] },
        });
        [...storage.values()].forEach((item) => {
            const exist = exists.find((_item) => _item.slug === item.insertOne.document.slug);
            if (exist) {
                storage.set(item.insertOne.document.slug, {
                    updateOne: {
                        filter: {
                            _id: exist._id,
                        },
                        update: {
                            $addToSet: {
                                categories: payload.categories[0],
                                categoriesId: payload.categoriesId[0],
                            },
                        },
                    },
                });
            }
            storageSlugs.push(item.insertOne.document.slug);
        });
        if (storage.size) {
            await this.model.bulkWrite([...storage.values()]);
        }
        exists = await this.model.find({ slug: { $in: storageSlugs } });
        return exists;
    }
    async handleCategoryUpdate({ payload, }) {
        const categoriesStorage = new Map();
        payload.categories.forEach((item) => {
            categoriesStorage.set(String(item._id), item);
        });
        const data = await this.model.find({
            categoriesId: payload.categoryId,
        });
        const storage = new Map();
        data.forEach((item) => {
            const categories = [];
            item.categoriesId.forEach((cat) => {
                const cate = categoriesStorage.get(String(cat));
                if (cate) {
                    categories.push({
                        name: cate.name,
                        slug: cate.slug,
                    });
                }
            });
            storage.set(item.slug, {
                updateOne: {
                    filter: {
                        _id: item._id,
                    },
                    update: {
                        $set: {
                            categories,
                        },
                    },
                },
            });
        });
        if (storage.size) {
            await this.model.bulkWrite([...storage.values()]);
        }
        return true;
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
                        {
                            'categories.name': {
                                $regex: new RegExp(q, 'gi'),
                            },
                        },
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
                name: 'Location-Deleted',
                slug: `${model.slug}-deleted`,
                disabled: true,
                status: common_2.Status.INACTIVE,
            },
        });
        return 'Removed';
    }
};
exports.LocationsService = LocationsService;
__decorate([
    (0, event_emitter_1.OnEvent)(event_enum_1.EventTypeName.LocationDataUpload),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocationsService.prototype, "handleBigDataProcess", null);
__decorate([
    (0, event_emitter_1.OnEvent)(event_enum_1.EventTypeName.CategoryNameUpdated),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocationsService.prototype, "handleCategoryUpdate", null);
exports.LocationsService = LocationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(location_entity_1.Location.name)),
    __metadata("design:paramtypes", [Object])
], LocationsService);
//# sourceMappingURL=locations.service.js.map