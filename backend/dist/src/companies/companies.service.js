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
exports.CompaniesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const company_entity_1 = require("./entities/company.entity");
const common_2 = require("../../_protos/common");
const slug_1 = require("../../libs/slug");
const event_emitter_1 = require("@nestjs/event-emitter");
const event_enum_1 = require("../../_protos/common/enums/event.enum");
const event_listener_dto_1 = require("../../_protos/common/dto/event.listener.dto");
let CompaniesService = class CompaniesService {
    constructor(model) {
        this.model = model;
    }
    async handleBatchUpload({ payload, type, }) {
        if (type !== event_listener_dto_1.EventType.COMPANIES) {
            throw new common_1.BadRequestException('Evento no valido', 'Event not valid');
        }
        const storageSlugs = [];
        const storageLocations = new Map();
        const storage = new Map();
        payload.locations.forEach((item) => {
            storageLocations.set(item.slug, item);
        });
        payload.data.forEach((item) => {
            if (item.name?.trim()) {
                const slug = (0, slug_1.slugify)(item.name?.trim());
                const locationSlug = (0, slug_1.slugify)(item.keyword?.trim());
                const location = storageLocations.get(locationSlug);
                if (slug) {
                    storage.set(slug, {
                        insertOne: {
                            document: {
                                name: item.name?.trim(),
                                address: item.address?.trim(),
                                googleMapsLink: item.link,
                                initialLetter: slug[0],
                                phoneNumber: item['phone-number']?.trim(),
                                websiteUrl: item.website?.trim(),
                                categories: payload.categories,
                                categoriesId: payload.categoriesId,
                                slug,
                                locationId: location._id,
                                locationName: location.name,
                                locationSlug: location.slug,
                                status: common_2.Status.ACTIVE,
                            },
                        },
                    });
                }
                else {
                    console.log(item);
                }
            }
        });
        const exists = await this.model.find({
            slug: { $in: [...storage.keys()] },
        });
        [...storage.values()].forEach((item) => {
            const exist = exists.find((_item) => _item.slug === item.insertOne.document.slug);
            if (exist) {
                storage.delete(item.insertOne.document.slug);
            }
            storageSlugs.push(item.insertOne.document.slug);
        });
        if (storage.size) {
            await this.model.bulkWrite([...storage.values()]);
        }
        return 'done';
    }
    async handleCategoryUpdate({ payload, }) {
        const categoriesStorage = new Map();
        payload.categories.forEach((item) => {
            categoriesStorage.set(String(item._id), item);
        });
        const data = await this.model
            .find({
            categoriesId: payload.categoryId,
        })
            .select('_id slug categoriesId');
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
        const { slug, alreadyExist } = await this.slugValidator(input.name);
        if (alreadyExist) {
            throw new common_1.BadRequestException('Ya existe', 'Already exist');
        }
        const document = await new this.model({
            ...input,
            slug,
            initialLetter: slug[0],
        }).save();
        return document;
    }
    async findAll({ all, page, perPage, q, status, locationId, categoryId, merchantListingStatus, }) {
        const handleFilter = () => {
            let req = {
                disabled: false,
            };
            if (q !== '') {
                const regex = { $regex: new RegExp(q, 'gi') };
                req = {
                    ...req,
                    $or: [
                        { name: regex },
                        { slug: regex },
                        { locationName: regex },
                        {
                            'categories.name': regex,
                        },
                    ],
                };
            }
            if (status !== common_2.StatusAllowed.EMPTY) {
                req = { ...req, status };
            }
            if (locationId) {
                req = { ...req, locationId };
            }
            if (categoryId) {
                req = { ...req, categoriesId: categoryId };
            }
            if (merchantListingStatus?.length) {
                req = {
                    ...req,
                    merchantListingStatus: {
                        $in: merchantListingStatus,
                    },
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
                initialLetter: slug[0],
            },
        });
        return 'Updated';
    }
    async toggleStatus(_id) {
        const model = await this.findOne({ _id });
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
                name: 'Company-Deleted',
                slug: `${model.slug}-deleted`,
                status: common_2.Status.INACTIVE,
                disabled: true,
            },
        });
        return 'Removed';
    }
};
exports.CompaniesService = CompaniesService;
__decorate([
    (0, event_emitter_1.OnEvent)(event_enum_1.EventTypeName.CompanyUploadCreate),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompaniesService.prototype, "handleBatchUpload", null);
__decorate([
    (0, event_emitter_1.OnEvent)(event_enum_1.EventTypeName.CategoryNameUpdated),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompaniesService.prototype, "handleCategoryUpdate", null);
exports.CompaniesService = CompaniesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(company_entity_1.Company.name)),
    __metadata("design:paramtypes", [Object])
], CompaniesService);
//# sourceMappingURL=companies.service.js.map