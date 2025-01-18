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
import { Schema as MongooseSchema, ObjectId, Document } from 'mongoose';
import { ProductPriceType } from '_protos/common/enums/product.enum';
import { Status } from '_protos/common';
export type ProductDocument = Product & Document<Product>;
export declare class Product {
    _id: ObjectId;
    name: string;
    description: string;
    slug: string;
    images: string[];
    price: number;
    full_price: number;
    priceType: ProductPriceType;
    minimunDays: number;
    serviceFee: number;
    companyId: ObjectId;
    categoryId: ObjectId;
    locationId: ObjectId;
    status: Status;
    amenities: ObjectId[];
    spaceRequirements: string;
    supervision: string;
    safety: string;
    insurancePlan: string;
    notification: string;
    disabled: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ProductSchema: MongooseSchema<Product, import("mongoose").Model<Product, any, any, any, Document<unknown, any, Product> & Product & Required<{
    _id: MongooseSchema.Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, Document<unknown, {}, import("mongoose").FlatRecord<Product>> & import("mongoose").FlatRecord<Product> & Required<{
    _id: MongooseSchema.Types.ObjectId;
}>>;
