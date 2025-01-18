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
import { OnModuleInit } from '@nestjs/common';
import { Admin, AdminDocument } from './entities/admin.entity';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { CreateAdminInput } from './dto/create-admin.input';
import { SearchAdminInput } from './dto/search-admin-input';
import { UpdateAdminInput } from './dto/update-admin.input';
import { RecoverDocument } from './entities/recover.entity';
import { ChangePasswordInput, CheckRecoverIdInput, RecoverPasswordInput } from './dto/recover-password-input';
export declare class AdminService implements OnModuleInit {
    private readonly adminModel;
    private readonly recoverModel;
    private readonly logger;
    private readonly jwtService;
    private readonly cacheService;
    constructor(adminModel: PaginateModel<AdminDocument>, recoverModel: PaginateModel<RecoverDocument>);
    onModuleInit(): Promise<void>;
    encryptPassword(password: string): any;
    handleCreateDefaultAdmin(): Promise<void>;
    create(data: CreateAdminInput): Promise<string>;
    update({ _id, data }: UpdateAdminInput): Promise<string>;
    findAll(option: FilterQuery<AdminDocument>): Promise<(import("mongoose").Document<unknown, {}, AdminDocument> & Admin & import("mongoose").Document<Admin, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Admin;
    }>)[]>;
    getProfile(_id: ObjectId): Promise<any>;
    findOne(option?: FilterQuery<AdminDocument>, skipError?: boolean): Promise<import("mongoose").Document<unknown, {}, AdminDocument> & Admin & import("mongoose").Document<Admin, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Admin;
    }>>;
    updateStatus(_id: ObjectId): Promise<string>;
    findPaginateAndByFilter({ page, perPage, q, status, all }: SearchAdminInput, adminId: ObjectId): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, import("mongoose").PaginateOptions, AdminDocument> & Admin & import("mongoose").Document<Admin, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Admin;
    }>>>;
    checkRecoverId({ secureId }: CheckRecoverIdInput): Promise<string>;
    changePassword(data: ChangePasswordInput): Promise<string>;
    recoverPassword({ email }: RecoverPasswordInput): Promise<string>;
}
