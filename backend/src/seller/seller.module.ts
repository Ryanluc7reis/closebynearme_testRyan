/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SellerService } from './seller.service';
import { SellerResolver } from './seller.resolver';
import { Seller, SellerSchema } from './entities/seller.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Seller.name, schema: SellerSchema }]),
  ],
  providers: [SellerService, SellerResolver],
})
export class SellerModule {}
