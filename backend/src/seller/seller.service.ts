/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSellerInput } from './dto/create-seller.input';
import { UpdateSellerInput } from './dto/update-seller.input';
import { Seller, SellerDocument } from './entities/seller.entity';
import { JwtService } from '../common/modules/jwt/jwt.service';

@Injectable()
export class SellerService {
  @Inject(JwtService)
  private readonly jwtService: JwtService;
  constructor(
    @InjectModel(Seller.name)
    private readonly sellerModel: Model<SellerDocument>,
  ) {}

  async create(data: CreateSellerInput) {
    const newSeller = new this.sellerModel({
      ...data,
      password: this.jwtService.encodePassword(data.password),
    });

    await newSeller.save();

    return 'Seller created successfully';
  }
  async findAll(): Promise<Seller[]> {
    return this.sellerModel.find();
  }

  async updateSeller({ _id }: UpdateSellerInput) {
    const updateSeller = await this.sellerModel.findOneAndUpdate(
      { _id },
      { isApproved: true },
      { new: true },
    );
    if (!updateSeller) {
      throw new Error('Seller not found');
    }

    return updateSeller;
  }

  async deleteSellerById({ _id }: UpdateSellerInput) {
    const seller = await this.sellerModel.findByIdAndDelete({ _id });
    if (!seller) {
      throw new Error('Seller not found');
    }
    return 'Seller deleted successfully';
  }
}
