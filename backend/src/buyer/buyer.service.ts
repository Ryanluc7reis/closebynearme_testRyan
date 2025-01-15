/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBuyerInput } from './dto/create-buyer.input';
import { Buyer, BuyerDocument } from './entities/buyer.entity';

@Injectable()
export class BuyerService {
  constructor(
    @InjectModel(Buyer.name) private readonly buyerModel: Model<BuyerDocument>,
  ) {}

  async create(data: CreateBuyerInput): Promise<Buyer> {
    const createdBuyer = new this.buyerModel(data);
    return createdBuyer.save();
  }

  async findAll(): Promise<Buyer[]> {
    return this.buyerModel.find();
  }
  async deleteBuyerById(id: string): Promise<boolean> {
    const result = await this.buyerModel.deleteOne({ _id: id });
    return result.deletedCount > 0;
  }
}
