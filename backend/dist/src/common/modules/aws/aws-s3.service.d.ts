/// <reference types="node" />
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
import AWS_S3, { S3Client } from '@aws-sdk/client-s3';
import { ObjectId } from 'mongoose';
export declare class S3Service {
    bucketName: string;
    region: string;
    s3Client: S3Client;
    constructor();
    parseUrl(key: string): Promise<string>;
    uploadFile(filePath: string): Promise<string>;
    uploadFileSchema(filePath: string, Key: string): Promise<string>;
    uploadBase64File(base64: string, id: ObjectId | string, path?: string): Promise<string>;
    uploadBufferFile(buffer: Buffer, filename: string, ContentType?: string, path?: string): Promise<string>;
    getObject(path: string): Promise<Buffer>;
    listObjects(): Promise<string>;
    deleteObject(key: string): Promise<AWS_S3.DeleteObjectCommandOutput>;
    isValidHttpUrl(base64: string): boolean;
}
