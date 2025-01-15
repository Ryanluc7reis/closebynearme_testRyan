import { Module } from '@nestjs/common';
import { MongoConfigService } from '../../../common/modules/mongo/mongo.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [MongoConfigService],
  exports: [MongoConfigService],
})
export class MongoConfigModule {}

export const MongoModule = MongooseModule.forRootAsync({
  imports: [MongoConfigModule],
  useExisting: MongoConfigService,
});
