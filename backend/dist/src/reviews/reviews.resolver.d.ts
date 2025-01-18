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
import { ReviewsService } from './reviews.service';
import { Review } from './entities/review.entity';
import { SearchBaseInput } from '_protos/classes/search.base';
import { ObjectId } from 'mongoose';
export declare class ReviewsResolver {
    private readonly service;
    constructor(service: ReviewsService);
    createReview(input: any): Promise<string>;
    findAll(search: SearchBaseInput, companyId: ObjectId): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            createdAt: number;
        };
    }, import("./entities/review.entity").ReviewDocument> & Review & import("mongoose").Document<Review, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Review;
    }>>>;
    updateReview(input: any): Promise<import("bson").ObjectID>;
    removeReview(id: ObjectId): Promise<string>;
    toggleStatus(id: ObjectId): Promise<string>;
}
