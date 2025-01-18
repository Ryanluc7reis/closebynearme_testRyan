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
import { Product } from './entities/product.entity';
import { ObjectId } from 'mongoose';
import { CreateAmenitiesInput } from './dto/create-amenities.input';
import { Amenities } from './entities/amenities.entity';
import { SearchBaseInput } from '_protos/classes/search.base';
export declare class ProductsResolver {
    private readonly service;
    createProduct(input: any): Promise<string>;
    findAll(search: any): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            name: number;
        };
    }, import("./entities/product.entity").ProductDocument> & Product & import("mongoose").Document<Product, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Product;
    }>>>;
    createAmenities(input: CreateAmenitiesInput): Promise<string>;
    updateAmenities(input: any): Promise<string>;
    findAmenities(ids: ObjectId[]): Promise<(import("mongoose").Document<unknown, {}, import("./entities/amenities.entity").AmenitiesDocument> & Amenities & import("mongoose").Document<Amenities, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Amenities;
    }>)[]>;
    listAmenitiesPaginated(search: SearchBaseInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, import("mongoose").PaginateOptions, import("./entities/amenities.entity").AmenitiesDocument> & Amenities & import("mongoose").Document<Amenities, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Amenities;
    }>>>;
    findOne(_id: ObjectId): Promise<import("mongoose").Document<unknown, {}, import("./entities/product.entity").ProductDocument> & Product & import("mongoose").Document<Product, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Product;
    }>>;
    findOneProductPopulate(slug: string): Promise<Omit<import("mongoose").Document<unknown, {}, import("./entities/product.entity").ProductDocument> & Product & import("mongoose").Document<Product, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Product;
    }>, never>>;
    listProductsPopulateSameCompany(search: any, slug: string): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            name: number;
        };
    }, import("./entities/product.entity").ProductDocument> & Product & import("mongoose").Document<Product, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Product;
    }>>>;
    updateProduct(input: any): Promise<string>;
    removeProduct(id: ObjectId): Promise<string>;
    toggleStatus(id: ObjectId): Promise<string>;
}
