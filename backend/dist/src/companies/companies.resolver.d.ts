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
import { CompaniesService } from './companies.service';
import { Company } from './entities/company.entity';
import { ObjectId } from 'mongoose';
import { SearchCompanyInput } from './dto/search-company.input';
export declare class CompaniesResolver {
    private readonly service;
    constructor(service: CompaniesService);
    createCompany(input: any): Promise<import("mongoose").Schema.Types.ObjectId & Company>;
    findAll(search: SearchCompanyInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            name: number;
        };
    }, import("./entities/company.entity").CompanyDocument> & Company & import("mongoose").Document<Company, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Company;
    }>>>;
    findOne(_id: ObjectId): Promise<import("mongoose").Document<unknown, {}, import("./entities/company.entity").CompanyDocument> & Company & import("mongoose").Document<Company, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Company;
    }>>;
    updateCompany(input: any): Promise<string>;
    removeCompany(id: ObjectId): Promise<string>;
    toggleStatus(id: ObjectId): Promise<string>;
}
