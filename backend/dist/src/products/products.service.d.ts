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
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product, ProductDocument } from './entities/product.entity';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { SearchProductInput } from './dto/search-product.input';
import { CreateAmenitiesInput } from './dto/create-amenities.input';
import { Amenities, AmenitiesDocument } from './entities/amenities.entity';
import { UpdateAmenitiesInput } from './dto/update-amenities.input';
import { SearchBaseInput } from '_protos/classes/search.base';
export declare class ProductsService {
    private readonly model;
    private readonly amenitiesModel;
    constructor(model: PaginateModel<ProductDocument>, amenitiesModel: PaginateModel<AmenitiesDocument>);
    slugValidator(name: string): Promise<{
        slug: string;
        document: import("mongoose").Document<unknown, {}, ProductDocument> & Product & import("mongoose").Document<Product, any, any> & Required<{
            _id: import("mongoose").Schema.Types.ObjectId & Product;
        }>;
        alreadyExist: boolean;
    }>;
    create(input: CreateProductInput): Promise<import("mongoose").Document<unknown, {}, ProductDocument> & Product & import("mongoose").Document<Product, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Product;
    }>>;
    getAmenities(input: ObjectId[]): Promise<(import("mongoose").Document<unknown, {}, AmenitiesDocument> & Amenities & import("mongoose").Document<Amenities, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Amenities;
    }>)[]>;
    findAmenitiesAll({ all, page, perPage, q }: SearchBaseInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, import("mongoose").PaginateOptions, AmenitiesDocument> & Amenities & import("mongoose").Document<Amenities, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Amenities;
    }>>>;
    createAmenities(input: CreateAmenitiesInput): Promise<import("mongoose").Document<unknown, {}, AmenitiesDocument> & Amenities & import("mongoose").Document<Amenities, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Amenities;
    }>>;
    updateAmenities({ _id, data }: UpdateAmenitiesInput): Promise<string>;
    findAll({ all, page, perPage, q, status, companyId, categoriesId, locationId, }: SearchProductInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            name: number;
        };
    }, ProductDocument> & Product & import("mongoose").Document<Product, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Product;
    }>>>;
    findByFilterAll({ all, page, perPage, q, status, companyId, categoriesId, }: SearchProductInput, slug?: string): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            name: number;
        };
    }, ProductDocument> & Product & import("mongoose").Document<Product, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Product;
    }>>>;
    findOne(option: FilterQuery<ProductDocument>, skipError?: boolean): Promise<import("mongoose").Document<unknown, {}, ProductDocument> & Product & import("mongoose").Document<Product, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Product;
    }>>;
    update({ _id, data }: UpdateProductInput): Promise<string>;
    toggleStatus(_id: ObjectId): Promise<string>;
    remove(_id: ObjectId): Promise<string>;
}
