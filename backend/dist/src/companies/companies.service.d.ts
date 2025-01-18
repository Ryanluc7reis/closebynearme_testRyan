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
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { Company, CompanyDocument } from './entities/company.entity';
import { IUploadCSVObject } from '_protos/common/interfaces';
import { EventPayload } from '_protos/common/dto/event.listener.dto';
import { Location } from 'src/locations/entities/location.entity';
import { CategoryInput } from 'src/categories/dto/create-category.input';
import { SearchCompanyInput } from './dto/search-company.input';
export declare class CompaniesService {
    private readonly model;
    constructor(model: PaginateModel<CompanyDocument>);
    handleBatchUpload({ payload, type, }: EventPayload<{
        data: IUploadCSVObject[];
        locations: Location[];
        categories: CategoryInput[];
        categoriesId: ObjectId[];
    }>): Promise<string>;
    handleCategoryUpdate({ payload, }: EventPayload<{
        categoryId: ObjectId;
        categories: CategoryInput[];
    }>): Promise<boolean>;
    slugValidator(name: string): Promise<{
        slug: string;
        document: import("mongoose").Document<unknown, {}, CompanyDocument> & Company & import("mongoose").Document<Company, any, any> & Required<{
            _id: import("mongoose").Schema.Types.ObjectId & Company;
        }>;
        alreadyExist: boolean;
    }>;
    create(input: CreateCompanyInput): Promise<import("mongoose").Document<unknown, {}, CompanyDocument> & Company & import("mongoose").Document<Company, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Company;
    }>>;
    findAll({ all, page, perPage, q, status, locationId, categoryId, merchantListingStatus, }: SearchCompanyInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            name: number;
        };
    }, CompanyDocument> & Company & import("mongoose").Document<Company, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Company;
    }>>>;
    findOne(option: FilterQuery<CompanyDocument>, skipError?: boolean): Promise<import("mongoose").Document<unknown, {}, CompanyDocument> & Company & import("mongoose").Document<Company, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Company;
    }>>;
    update({ _id, data }: UpdateCompanyInput): Promise<string>;
    toggleStatus(_id: ObjectId): Promise<string>;
    remove(_id: ObjectId): Promise<string>;
}
