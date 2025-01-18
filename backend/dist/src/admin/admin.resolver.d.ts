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
import { AdminService } from './admin.service';
import { Admin } from './entities/admin.entity';
import { CreateAdminInput } from './dto/create-admin.input';
import { SearchAdminInput } from './dto/search-admin-input';
import { ObjectId } from 'mongoose';
import { ChangePasswordInput, CheckRecoverIdInput, RecoverPasswordInput } from './dto/recover-password-input';
export declare class AdminResolver {
    private readonly adminService;
    constructor(adminService: AdminService);
    me(adminId: ObjectId): Promise<any>;
    createAdmin(input: CreateAdminInput): Promise<string>;
    updateAdmin(input: any): Promise<string>;
    toggleActiveInactiveAdmin(id: ObjectId): Promise<string>;
    findAll(admin: ObjectId, data: SearchAdminInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, import("mongoose").PaginateOptions, import("./entities/admin.entity").AdminDocument> & Admin & import("mongoose").Document<Admin, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Admin;
    }>>>;
    checkRecoverSecureIdValid(data: CheckRecoverIdInput): Promise<string>;
    recoverPassword(data: RecoverPasswordInput): Promise<string>;
    changePassword(data: ChangePasswordInput): Promise<string>;
}
