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
import { Status } from '_protos/common';
import { Document, ObjectId, Schema as MongooseSchema } from 'mongoose';
import { CategoriesReduced } from 'src/categories/entities/categories.reduced.entity';
export type LocationDocument = Location & Document<Location>;
export declare class Location {
    _id: ObjectId;
    name: string;
    slug: string;
    image: string;
    categoriesId: ObjectId[];
    categories: CategoriesReduced[];
    status: Status;
    disabled: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const LocationSchema: MongooseSchema<Location, import("mongoose").Model<Location, any, any, any, Document<unknown, any, Location> & Location & Required<{
    _id: MongooseSchema.Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Location, Document<unknown, {}, import("mongoose").FlatRecord<Location>> & import("mongoose").FlatRecord<Location> & Required<{
    _id: MongooseSchema.Types.ObjectId;
}>>;
