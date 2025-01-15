import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import configModule from '../config';
import * as mongoPaginate from 'mongoose-paginate-v2';
import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoAgregatePaginate = require('mongoose-aggregate-paginate-v2');

@Injectable()
export class MongoConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    mongoose.plugin(mongoPaginate);
    mongoose.plugin(mongoAgregatePaginate);

    return {
      uri: configModule.DB_URI,
      dbName: configModule.DB_NAME,
    };
  }
}
