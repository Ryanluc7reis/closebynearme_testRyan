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
import { FaqsService } from './faqs.service';
import { Faq } from './entities/faq.entity';
import { ObjectId } from 'mongoose';
import { SearchBaseInput } from '_protos/classes/search.base';
export declare class FaqsResolver {
    private readonly service;
    constructor(service: FaqsService);
    createFaq(input: any): Promise<import("mongoose").Schema.Types.ObjectId>;
    findAll(search: SearchBaseInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, import("mongoose").PaginateOptions, Faq> & Faq & Required<{
        _id: import("mongoose").Schema.Types.ObjectId;
    }>>>;
    updateFaq(input: any): Promise<string>;
    removeFaq(id: ObjectId): Promise<string>;
    toggleStatus(id: ObjectId): Promise<string>;
}
