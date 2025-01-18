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
import { LocationsService } from './locations.service';
import { Location } from './entities/location.entity';
import { SearchBaseInput } from '_protos/classes/search.base';
import { ObjectId } from 'mongoose';
export declare class LocationsResolver {
    private readonly service;
    constructor(service: LocationsService);
    createLocation(input: any): Promise<import("mongoose").Schema.Types.ObjectId & Location>;
    findAll(search: SearchBaseInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            name: number;
        };
    }, import("./entities/location.entity").LocationDocument> & Location & import("mongoose").Document<Location, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Location;
    }>>>;
    updateLocation(input: any): Promise<string>;
    removeLocation(id: ObjectId): Promise<string>;
    toggleStatus(id: ObjectId): Promise<string>;
}
