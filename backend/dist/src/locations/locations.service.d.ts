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
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { SearchBaseInput } from '_protos/classes/search.base';
import { Location, LocationDocument } from './entities/location.entity';
import { EventPayload } from '_protos/common/dto/event.listener.dto';
import { IUploadCSVObject } from '_protos/common/interfaces';
import { CategoryInput } from 'src/categories/dto/create-category.input';
export declare class LocationsService {
    private readonly model;
    constructor(model: PaginateModel<LocationDocument>);
    handleBigDataProcess({ payload, type, }: EventPayload<{
        data: IUploadCSVObject[];
        categoriesId: ObjectId[];
        categories: CategoryInput[];
    }>): Promise<(import("mongoose").Document<unknown, {}, LocationDocument> & Location & import("mongoose").Document<Location, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Location;
    }>)[]>;
    handleCategoryUpdate({ payload, }: EventPayload<{
        categoryId: ObjectId;
        categories: CategoryInput[];
    }>): Promise<boolean>;
    slugValidator(name: string): Promise<{
        slug: string;
        document: import("mongoose").Document<unknown, {}, LocationDocument> & Location & import("mongoose").Document<Location, any, any> & Required<{
            _id: import("mongoose").Schema.Types.ObjectId & Location;
        }>;
        alreadyExist: boolean;
    }>;
    create(input: CreateLocationInput): Promise<import("mongoose").Document<unknown, {}, LocationDocument> & Location & import("mongoose").Document<Location, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Location;
    }>>;
    findAll({ all, page, perPage, q, status }: SearchBaseInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            name: number;
        };
    }, LocationDocument> & Location & import("mongoose").Document<Location, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Location;
    }>>>;
    findOne(option: FilterQuery<LocationDocument>, skipError?: boolean): Promise<import("mongoose").Document<unknown, {}, LocationDocument> & Location & import("mongoose").Document<Location, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Location;
    }>>;
    update({ _id, data }: UpdateLocationInput): Promise<string>;
    toggleStatus(_id: ObjectId): Promise<string>;
    remove(_id: ObjectId): Promise<string>;
}
