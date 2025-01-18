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
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { SearchBaseInput } from '_protos/classes/search.base';
import { ObjectId } from 'mongoose';
export declare class CategoriesResolver {
    private readonly service;
    constructor(service: CategoriesService);
    createCategory(input: any): Promise<string>;
    findAll(search: SearchBaseInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            createdAt: number;
        };
    }, import("./entities/category.entity").CategoryDocument> & Category & import("mongoose").Document<Category, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Category;
    }>>>;
    updateCategory(input: any): Promise<string>;
    removeCategory(id: ObjectId): Promise<string>;
    toggleStatus(id: ObjectId): Promise<string>;
}
