/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-paginate-v2" />
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { SearchBaseInput } from '_protos/classes/search.base';
import { Review, ReviewDocument } from './entities/review.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class ReviewsService {
    private readonly model;
    private eventEmitter;
    constructor(model: PaginateModel<ReviewDocument>, eventEmitter: EventEmitter2);
    create(input: CreateReviewInput): Promise<string>;
    findAll({ all, page, perPage, q, status }: SearchBaseInput, companyId: ObjectId): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            createdAt: number;
        };
    }, ReviewDocument> & Review & import("mongoose").Document<Review, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Review;
    }>>>;
    findOne(option: FilterQuery<ReviewDocument>, skipError?: boolean): Promise<import("mongoose").Document<unknown, {}, ReviewDocument> & Review & import("mongoose").Document<Review, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Review;
    }>>;
    update({ _id, data }: UpdateReviewInput): Promise<import("bson").ObjectID>;
    toggleStatus(_id: ObjectId): Promise<string>;
    remove(_id: ObjectId): Promise<string>;
}
