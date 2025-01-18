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
import { HttpStatus } from '@nestjs/common';
import { ObjectId, PaginateModel } from 'mongoose';
import { AccountDocument } from '../auth/entities/account.entity';
import { Admin } from '../admin/entities/admin.entity';
import { Roles } from '../../_protos/common';
import { SessionDocument } from './entities/session.entity';
import { LoginInput } from './dto/login-input';
export declare class AuthService {
    private readonly accountModel;
    private readonly sessionModel;
    private readonly jwtService;
    private readonly adminService;
    constructor(accountModel: PaginateModel<AccountDocument>, sessionModel: PaginateModel<SessionDocument>);
    createSessionAdmin(data: Admin): Promise<string>;
    loginAdmin({ email, password }: LoginInput): Promise<{
        accessToken: string;
        avatar: string;
        id: any;
        email: string;
        fullName: string;
        profile: [Roles.ADMIN];
        permissions: import("../../_protos/common").PermissionsMenu[];
        role: string;
    }>;
    adminProfile(adminId: ObjectId): Promise<any>;
    validate(token: string): Promise<{
        status: HttpStatus;
        error: string[];
        userId: any;
    } | {
        status: HttpStatus;
        error: any;
        userId: string;
    }>;
}
