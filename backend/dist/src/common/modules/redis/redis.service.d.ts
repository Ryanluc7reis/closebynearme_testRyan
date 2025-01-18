import { RedisService } from '@songkeys/nestjs-redis';
export declare class CacheService {
    private readonly redisService;
    private readonly client;
    constructor(redisService: RedisService);
    set(key: string, value: any, seconds?: number): Promise<any>;
    get(key: string): Promise<any>;
    del(key: string): Promise<any>;
    flushall(): Promise<any>;
    getItemsByKey(key: string): Promise<string[]>;
    updateItemsByKey(key: string, value: any, seconds?: number): Promise<boolean>;
    deleteItemsByKey(key: string): Promise<boolean>;
}
