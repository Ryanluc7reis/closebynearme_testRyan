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
import { AccountSchemaAllowed, Provider, Scopes, SessionState } from '../../../_protos/common';
export type AccountDocument = Account & Document;
export declare class Account {
    _id: string;
    userId: ObjectId;
    type: AccountSchemaAllowed[];
    provider: Provider;
    refresh_token: string;
    access_token: string;
    expires_at: Date;
    scope: Scopes[];
    id_token: ObjectId;
    session_state: SessionState;
}
export declare const AccountSchema: MongooseSchema<Account, import("mongoose").Model<Account, any, any, any, Document<unknown, any, Account> & Account & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Account, Document<unknown, {}, import("mongoose").FlatRecord<Account>> & import("mongoose").FlatRecord<Account> & Required<{
    _id: string;
}>>;
