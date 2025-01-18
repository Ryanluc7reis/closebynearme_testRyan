export declare class UploadsService {
    private readonly s3Service;
    upload(file: any, fileName: string, path: string): Promise<{
        location: string;
    }>;
}
