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
exports.FaqsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const faq_entity_1 = require("./entities/faq.entity");
const common_2 = require("../../_protos/common");
const slug_1 = require("../../libs/slug");
const data_fake_1 = require("../../libs/data-fake");
let FaqsService = class FaqsService {
    constructor(model) {
        this.model = model;
    }
    async onModuleInit() {
        if (data_fake_1.importFaqsFakeData) {
            for await (const data of data_fake_1.faqsFakeData) {
                try {
                    const documentId = await this.create(data);
                    await this.toggleStatus(documentId._id);
                }
                catch (e) { }
            }
        }
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
        const slug = await this.slugValidator(input.question);
        const document = await new this.model({
            ...input,
            slug,
        }).save();
        return document;
    }
    async findAll({ all, page, perPage, q, status }, locationId, categoryId) {
        const handleFilter = () => {
            let req = {
                disabled: false,
            };
            if (q !== '') {
                req = {
                    ...req,
                    $or: [
                        { question: { $regex: new RegExp(q, 'gi') } },
                        { answer: { $regex: new RegExp(q, 'gi') } },
                        { slug: { $regex: new RegExp(q, 'gi') } },
                        { locationName: { $regex: new RegExp(q, 'gi') } },
                        { categoryName: { $regex: new RegExp(q, 'gi') } },
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
                req = { ...req, categoryId };
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
        if (data.question !== model.question) {
            slug = await this.slugValidator(data.question);
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
                name: 'Faq-Deleted',
                slug: `${model.slug}-deleted`,
                status: common_2.Status.INACTIVE,
                disabled: true,
            },
        });
        return 'Removed';
    }
};
exports.FaqsService = FaqsService;
exports.FaqsService = FaqsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(faq_entity_1.Faq.name)),
    __metadata("design:paramtypes", [Object])
], FaqsService);
//# sourceMappingURL=faqs.service.js.map