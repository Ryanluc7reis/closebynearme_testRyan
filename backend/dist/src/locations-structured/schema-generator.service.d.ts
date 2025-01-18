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
import { ObjectId } from 'mongoose';
interface StorageSchema {
    url: string;
    lastmod: string;
}
interface FeedSchema {
    id: string;
    title: string;
    description: string;
    link: string;
    image_link: string;
    availability: string;
    price: string;
    identifier_exists: string;
    condition: string;
    shipping: string;
}
export declare class SchemaGeneratorService {
    private readonly locationService;
    private readonly companyService;
    private readonly productService;
    private readonly s3Service;
    handleCron(): Promise<void>;
    handleCompaniesPublished(page: number, url_path: string, storage: Map<string, FeedSchema>): Promise<void>;
    handleProducts(page: number, companyId: ObjectId, url_path: string, storage: Map<string, FeedSchema>): Promise<void>;
    handleProductsForSchema(page: number, url_path: string, storage: Map<string, StorageSchema>): Promise<void>;
    handleLocations(page: number, url_path: string, storage: Map<string, StorageSchema>): Promise<void>;
    handleCompanies(page: number, url_path: string, storage: Map<string, StorageSchema>): Promise<void>;
    schemaGenerator(): Promise<string>;
    schemaFeedGenerator(): Promise<string>;
}
export {};
