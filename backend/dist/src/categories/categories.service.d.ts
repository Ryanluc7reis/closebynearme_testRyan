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
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { SearchBaseInput } from '_protos/classes/search.base';
import { Category, CategoryDocument } from './entities/category.entity';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class CategoriesService {
    private readonly model;
    private eventEmitter;
    constructor(model: PaginateModel<CategoryDocument>, eventEmitter: EventEmitter2);
    slugValidator(name: string): Promise<string>;
    create(input: CreateCategoryInput): Promise<string>;
    findAll({ all, page, perPage, q, status }: SearchBaseInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            createdAt: number;
        };
    }, CategoryDocument> & Category & import("mongoose").Document<Category, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Category;
    }>>>;
    findOne(option: FilterQuery<CategoryDocument>, skipError?: boolean): Promise<import("mongoose").Document<unknown, {}, CategoryDocument> & Category & import("mongoose").Document<Category, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Category;
    }>>;
    update({ _id, data }: UpdateCategoryInput): Promise<string>;
    toggleStatus(_id: ObjectId): Promise<string>;
    remove(_id: ObjectId): Promise<string>;
    processCategoryUpdate(): Promise<void>;
    processCsv(file: any, _id: ObjectId): Promise<string>;
}
