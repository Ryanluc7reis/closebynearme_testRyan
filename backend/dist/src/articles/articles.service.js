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
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const article_entity_1 = require("./entities/article.entity");
const common_2 = require("../../_protos/common");
const slug_1 = require("../../libs/slug");
const data_fake_1 = require("../../libs/data-fake");
const tags_enum_1 = require("../../_protos/common/enums/tags.enum");
let ArticlesService = class ArticlesService {
    constructor(model) {
        this.model = model;
    }
    async onModuleInit() {
        if (data_fake_1.importArticlesFakeData) {
            for await (const data of data_fake_1.articlesFakeData) {
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
        const document = await this.findOne({
            slug,
            disabled: false,
        }, true);
        if (document) {
            throw new common_1.BadRequestException('Ya existe', 'Already exist');
        }
        return {
            slug,
            document,
            alreadyExist: !!document,
        };
    }
    async create(input) {
        const { slug } = await this.slugValidator(input.title);
        const document = await new this.model({
            ...input,
            slug,
        }).save();
        return document;
    }
    async findAll({ all, page, perPage, q, status, type }, locationId, categoryId) {
        const handleFilter = () => {
            let req = {
                disabled: false,
            };
            if (q !== '') {
                req = {
                    ...req,
                    $or: [
                        { title: { $regex: new RegExp(q, 'gi') } },
                        { description: { $regex: new RegExp(q, 'gi') } },
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
            if (type !== tags_enum_1.ArticlesTypeAllowed.EMPTY) {
                req = { ...req, type };
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
        if (data.title !== model.title) {
            const item = await this.slugValidator(data.title);
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
                slug: `${model.slug}-deleted`,
                disabled: true,
                status: common_2.Status.INACTIVE,
            },
        });
        return 'Removed';
    }
};
exports.ArticlesService = ArticlesService;
exports.ArticlesService = ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(article_entity_1.Article.name)),
    __metadata("design:paramtypes", [Object])
], ArticlesService);
//# sourceMappingURL=articles.service.js.map