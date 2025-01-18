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
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const review_entity_1 = require("./entities/review.entity");
const common_2 = require("../../_protos/common");
const event_emitter_1 = require("@nestjs/event-emitter");
let ReviewsService = class ReviewsService {
    constructor(model, eventEmitter) {
        this.model = model;
        this.eventEmitter = eventEmitter;
    }
    async create(input) {
        const data = await new this.model({
            ...input,
        }).save();
        return data._id.toString();
    }
    async findAll({ all, page, perPage, q, status }, companyId) {
        const handleFilter = () => {
            let req = {
                disabled: false,
            };
            if (q !== '') {
                req = {
                    ...req,
                    $or: [
                        { fullName: { $regex: new RegExp(q, 'gi') } },
                        { description: { $regex: new RegExp(q, 'gi') } },
                    ],
                };
            }
            if (status !== common_2.StatusAllowed.EMPTY) {
                req = { ...req, status };
            }
            if (companyId) {
                req = { ...req, companyId };
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
        await model.updateOne({
            $set: {
                ...data,
            },
        });
        return _id;
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
                fullName: 'Review-Deleted',
                status: common_2.Status.INACTIVE,
                disabled: true,
            },
        });
        return 'Removed';
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(review_entity_1.Review.name)),
    __metadata("design:paramtypes", [Object, event_emitter_1.EventEmitter2])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map