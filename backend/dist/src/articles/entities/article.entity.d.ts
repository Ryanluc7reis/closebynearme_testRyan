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
import { ArticlesType } from '_protos/common/enums/tags.enum';
import { Document, ObjectId, Schema as MongooseSchema } from 'mongoose';
export type ArticleDocument = Article & Document<Article>;
export declare class Article {
    _id: ObjectId;
    title: string;
    description: string;
    slug: string;
    image: string;
    categoryId: ObjectId;
    categoryName: string;
    locationId: ObjectId;
    locationName: string;
    type: ArticlesType;
    status: Status;
    disabled: boolean;
    createdAt: Date;
}
export declare const ArticleSchema: MongooseSchema<Article, import("mongoose").Model<Article, any, any, any, Document<unknown, any, Article> & Article & Required<{
    _id: MongooseSchema.Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Article, Document<unknown, {}, import("mongoose").FlatRecord<Article>> & import("mongoose").FlatRecord<Article> & Required<{
    _id: MongooseSchema.Types.ObjectId;
}>>;
