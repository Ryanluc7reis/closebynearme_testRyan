import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from './redis/redis.module';
import { MongoModule } from './mongo/mongo.module';
// import { SmsModule } from './modules/twilio/twilio.module';
import { CustomJwtModule } from './jwt/jwt.module';
import { ScheduleModule } from '@nestjs/schedule';
import { GraphqlModule } from './graphql.module';
import { CustomModule } from '../custom.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AWSModule } from './aws/aws-s3.module';

const configModule = ConfigModule.forRoot({
  isGlobal: true,
});

@Module({
  imports: [
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({
      global: true,
      wildcard: false,
      delimiter: '.',
      newListener: false,
      removeListener: false,
      maxListeners: 10,
      verboseMemoryLeak: false,
      ignoreErrors: false,
    }),
    configModule,
    RedisModule,
    MongoModule,
    CustomModule,
    AWSModule,
    // SmsModule,
    CustomJwtModule,
    GraphqlModule,
  ],
  exports: [
    configModule,
    RedisModule,
    MongoModule,
    CustomModule,
    AWSModule,
    // SmsModule,
    CustomJwtModule,
    GraphqlModule,
  ],
})
export class CommomModule {}
