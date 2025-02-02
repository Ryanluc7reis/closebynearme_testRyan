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
import { Document, ObjectId, Schema as MongooseSchema } from 'mongoose';
import { PermissionsMenu, Roles, Status } from '../../../_protos/common';
export type AdminDocument = Admin & Document<Admin>;
export declare class Admin {
    _id: ObjectId;
    email: string;
    fullName: string;
    avatar: string;
    password: string;
    status: Status;
    disabled: boolean;
    fullRecord: boolean;
    permissions: PermissionsMenu[];
    profile: [Roles.ADMIN];
    role: string;
    createdAt: Date;
}
export declare const AdminSchema: MongooseSchema<Admin, import("mongoose").Model<Admin, any, any, any, Document<unknown, any, Admin> & Admin & Required<{
    _id: MongooseSchema.Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Admin, Document<unknown, {}, import("mongoose").FlatRecord<Admin>> & import("mongoose").FlatRecord<Admin> & Required<{
    _id: MongooseSchema.Types.ObjectId;
}>>;
