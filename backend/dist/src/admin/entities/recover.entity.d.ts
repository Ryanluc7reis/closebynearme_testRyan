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
import { HydratedDocument, Schema as MongooseSchema, ObjectId } from 'mongoose';
import { Roles } from '../../../_protos/common';
export type RecoverDocument = Recover & HydratedDocument<Recover>;
export declare class Recover {
    userId: ObjectId;
    secureId: string;
    profile: Roles[];
    createdAt: Date;
}
export declare const RecoverSchema: MongooseSchema<Recover, import("mongoose").Model<Recover, any, any, any, import("mongoose").Document<unknown, any, Recover> & Recover & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Recover, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Recover>> & import("mongoose").FlatRecord<Recover> & {
    _id: import("mongoose").Types.ObjectId;
}>;
