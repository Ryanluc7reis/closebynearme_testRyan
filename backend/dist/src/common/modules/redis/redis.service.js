"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_redis_1 = require("@songkeys/nestjs-redis");
let CacheService = class CacheService {
    constructor(redisService) {
        this.redisService = redisService;
        this.client = this.redisService.getClient();
    }
    async set(key, value, seconds) {
        value = JSON.stringify(value);
        if (!seconds) {
            await this.client.set(key, value);
        }
        else {
            await this.client.set(key, value, 'EX', seconds);
        }
    }
    async get(key) {
        const data = await this.client.get(key);
        if (data) {
            return JSON.parse(data);
        }
        else {
            return null;
        }
    }
    async del(key) {
        await this.client.del(key);
    }
    async flushall() {
        await this.client.flushall();
    }
    async getItemsByKey(key) {
        const stream = this.client.scanStream({ match: `${key}`, count: 100 });
        let pipeline = this.client.pipeline();
        let localKeys = [];
        return new Promise((resolve, reject) => {
            stream.on('data', (resultKeys) => {
                for (const item of resultKeys) {
                    localKeys.push(item);
                }
                if (localKeys.length >= 100) {
                    localKeys = [];
                    pipeline = this.client.pipeline();
                }
            });
            stream.on('end', function () {
                pipeline.exec(() => {
                    resolve(localKeys);
                });
            });
            stream.on('error', function (err) {
                reject(err);
            });
        });
    }
    async updateItemsByKey(key, value, seconds) {
        value = JSON.stringify(value);
        const stream = this.client.scanStream({ match: `${key}`, count: 100 });
        let pipeline = this.client.pipeline();
        let localKeys = [];
        stream.on('data', (resultKeys) => {
            for (const item of resultKeys) {
                localKeys.push(item);
                if (!seconds) {
                    pipeline.set(item, value);
                }
                else {
                    pipeline.set(item, value, 'EX', seconds);
                }
            }
            if (localKeys.length >= 100) {
                pipeline.exec(() => {
                    console.log('one batch update complete');
                });
                localKeys = [];
                pipeline = this.client.pipeline();
            }
        });
        stream.on('end', function () {
            pipeline.exec(() => {
                console.log('final batch update complete');
            });
        });
        stream.on('error', function (err) {
            console.log('error', err);
        });
        return true;
    }
    async deleteItemsByKey(key) {
        const stream = this.client.scanStream({ match: `${key}`, count: 100 });
        let pipeline = this.client.pipeline();
        let localKeys = [];
        return new Promise((resolve, reject) => {
            stream.on('data', (resultKeys) => {
                for (const item of resultKeys) {
                    localKeys.push(item);
                    pipeline.del(item);
                }
                if (localKeys.length > 100) {
                    pipeline.exec(() => {
                        console.log('one batch delete complete');
                    });
                    localKeys = [];
                    pipeline = this.client.pipeline();
                }
            });
            stream.on('end', function () {
                pipeline.exec(() => {
                    console.log('final batch delete complete');
                    resolve(true);
                });
            });
            stream.on('error', function (err) {
                reject(err);
            });
        });
    }
};
exports.CacheService = CacheService;
exports.CacheService = CacheService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_redis_1.RedisService])
], CacheService);
//# sourceMappingURL=redis.service.js.map