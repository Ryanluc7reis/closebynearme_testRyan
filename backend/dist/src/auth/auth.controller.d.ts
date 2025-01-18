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
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login-input';
import { ObjectId } from 'mongoose';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signin(data: LoginInput): Promise<{
        accessToken: string;
        userData: {
            id: any;
            fullName: string;
            email: string;
            avatar: string;
            profile: [import("../../_protos/common").Roles.ADMIN];
            role: string;
        };
    }>;
    me(adminId: ObjectId): Promise<{
        userData: {
            id: any;
            fullName: any;
            email: any;
            avatar: any;
            profile: any;
            role: any;
        };
    }>;
    verticalNav(adminId: ObjectId): Promise<({
        title: string;
        path: string;
        icon: string;
        auth: boolean;
        permission: string;
        children?: undefined;
    } | {
        icon: string;
        title: string;
        auth: boolean;
        permission: string;
        children: {
            title: string;
            path: string;
        }[];
        path?: undefined;
    })[]>;
}
