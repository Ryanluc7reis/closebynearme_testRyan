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
import { UpdateSettingInput } from './dto/update-setting.input';
import { Setting, SettingDocument } from './entities/setting.entity';
import { PaginateModel } from 'mongoose';
export declare class SettingsService implements OnModuleInit {
    private readonly model;
    constructor(model: PaginateModel<SettingDocument>);
    onModuleInit(): Promise<void>;
    create(): Promise<string>;
    findOne(): Promise<import("mongoose").Document<unknown, {}, SettingDocument> & Setting & import("mongoose").Document<Setting, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Setting;
    }>>;
    update({ data }: UpdateSettingInput): Promise<string>;
}
