/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BuyerService } from './buyer.service';
import { BuyerResolver } from './buyer.resolver';
import { Buyer, BuyerSchema } from './entities/buyer.entity'; 

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Buyer.name, schema: BuyerSchema }, 
    ]),
  ],
  providers: [BuyerService, BuyerResolver],
})
export class BuyerModule {}
