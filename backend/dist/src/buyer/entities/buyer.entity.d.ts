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
import { Document, ObjectId } from 'mongoose';
import { AccountSchemaAllowed, Status } from '../../../_protos/common';
export type BuyerDocument = Buyer & Document<Buyer>;
export declare class Buyer {
    _id: ObjectId;
    birthday: string;
    email: string;
    fullName: string;
    Additional_Details?: string[];
    Areas_Of_Interest: string[];
    Delivery_Method: string[];
    Emotional_State: string[];
    Experience_Level: string[];
    Goals_And_Expectations: string[];
    Personality_Match: string[];
    Preferred_Psychic_Services: string[];
    Scheduling_Preferences: string[];
    Spiritual_Preferences: string[];
    Subscription_Preferences: string[];
    role: AccountSchemaAllowed[];
    status: Status;
    createdAt: Date;
}
export declare const BuyerSchema: import("mongoose").Schema<Buyer, import("mongoose").Model<Buyer, any, any, any, Document<unknown, any, Buyer> & Buyer & Required<{
    _id: import("mongoose").Schema.Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Buyer, Document<unknown, {}, import("mongoose").FlatRecord<Buyer>> & import("mongoose").FlatRecord<Buyer> & Required<{
    _id: import("mongoose").Schema.Types.ObjectId;
}>>;
