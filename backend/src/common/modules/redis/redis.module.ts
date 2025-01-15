import { Global, Module } from '@nestjs/common';
import { RedisModule as _RedisModule } from '@songkeys/nestjs-redis';
import config from '../config';
import { CacheService } from './redis.service';

@Global()
@Module({
  imports: [
    _RedisModule.forRoot({
      config: {
        name: config.REDIS_NAME,
        port: parseInt(config.REDIS_PORT as unknown as string),
        host: config.REDIS_URI,
      },
      closeClient: true,
      errorLog: true,
      readyLog: true,
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class RedisModule {}
