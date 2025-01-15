import { Injectable } from '@nestjs/common';
import { RedisService } from '@songkeys/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class CacheService {
  private readonly client: Redis;

  constructor(private readonly redisService: RedisService) {
    this.client = this.redisService.getClient();
    // or
    // this.redis = this.redisService.getClient(DEFAULT_REDIS_NAMESPACE);
  }

  /**
   * @Descripción: Método para la configuración del paquete Redis Cache
   * @Param key {string} clave
   * @Param value {String} valor
   * @Param segundos {número} expiró
   * @return: Promise<any>
   */
  public async set(key: string, value: any, seconds?: number): Promise<any> {
    value = JSON.stringify(value);

    if (!seconds) {
      await this.client.set(key, value);
    } else {
      await this.client.set(key, value, 'EX', seconds);
    }
  }

  /**
   * @Descripción: Establezca el valor en el caché de Redis
   * @param key {String}
   */
  public async get(key: string): Promise<any> {
    const data = await this.client.get(key);

    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

  /**
   * @Descripción: Eliminar datos de caché redis según la tecla
   * @param key {String}
   * @return:
   */
  public async del(key: string): Promise<any> {
    await this.client.del(key);
  }

  /**s
   * @Descripción: Borrar el Redis
   * @param {type}
   * @return:
   */
  public async flushall(): Promise<any> {
    await this.client.flushall();
  }

  public async getItemsByKey(key: string): Promise<string[]> {
    const stream = this.client.scanStream({ match: `${key}`, count: 100 });
    let pipeline = this.client.pipeline();
    let localKeys: string[] = [];

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

  public async updateItemsByKey(
    key: string,
    value: any,
    seconds?: number,
  ): Promise<boolean> {
    value = JSON.stringify(value);
    const stream = this.client.scanStream({ match: `${key}`, count: 100 });
    let pipeline = this.client.pipeline();
    let localKeys: string[] = [];

    stream.on('data', (resultKeys) => {
      for (const item of resultKeys) {
        localKeys.push(item);
        if (!seconds) {
          pipeline.set(item, value);
        } else {
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

  public async deleteItemsByKey(key: string): Promise<boolean> {
    const stream = this.client.scanStream({ match: `${key}`, count: 100 });
    let pipeline = this.client.pipeline();
    let localKeys: string[] = [];

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
}
