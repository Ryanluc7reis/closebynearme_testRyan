import { AccountSchemaAllowed } from '../../../_protos/common';
export declare class CreateBuyerInput {
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
    createdAt: Date;
}
