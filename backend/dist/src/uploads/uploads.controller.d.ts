import { StorageFile } from '@blazity/nest-file-fastify';
export declare class UploadsController {
    private readonly service;
    upload(data: {
        fileName: string;
        path: string;
    }, file: StorageFile): Promise<{
        location: string;
    }>;
}
