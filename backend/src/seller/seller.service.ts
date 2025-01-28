/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSellerInput } from './dto/create-seller.input';
import { Seller, SellerDocument } from './entities/seller.entity';

@Injectable()
export class SellerService {
  constructor(
    @InjectModel(Seller.name)
    private readonly sellerModel: Model<SellerDocument>,
  ) {}

  async create(data: CreateSellerInput): Promise<Seller> {
    const createdSeller = new this.sellerModel(data);
    return createdSeller.save();
  }
}
