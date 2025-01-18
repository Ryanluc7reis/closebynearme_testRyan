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
import { OnModuleInit } from '@nestjs/common';
import { CreateFaqInput } from './dto/create-faq.input';
import { UpdateFaqInput } from './dto/update-faq.input';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { SearchBaseInput } from '_protos/classes/search.base';
import { Faq, FaqDocument } from './entities/faq.entity';
export declare class FaqsService implements OnModuleInit {
    private readonly model;
    constructor(model: PaginateModel<Faq>);
    onModuleInit(): Promise<void>;
    slugValidator(name: string): Promise<string>;
    create(input: CreateFaqInput): Promise<import("mongoose").Document<unknown, {}, Faq> & Faq & Required<{
        _id: import("mongoose").Schema.Types.ObjectId;
    }>>;
    findAll({ all, page, perPage, q, status }: SearchBaseInput, locationId?: ObjectId, categoryId?: ObjectId): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, import("mongoose").PaginateOptions, Faq> & Faq & Required<{
        _id: import("mongoose").Schema.Types.ObjectId;
    }>>>;
    findOne(option: FilterQuery<FaqDocument>, skipError?: boolean): Promise<import("mongoose").Document<unknown, {}, Faq> & Faq & Required<{
        _id: import("mongoose").Schema.Types.ObjectId;
    }>>;
    update({ _id, data }: UpdateFaqInput): Promise<string>;
    toggleStatus(_id: ObjectId): Promise<string>;
    remove(_id: ObjectId): Promise<string>;
}
