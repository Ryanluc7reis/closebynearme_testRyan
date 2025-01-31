/* eslint-disable prettier/prettier */
import { Injectable, Inject,  NotFoundException, } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import { CreateSellerInput } from './dto/create-seller.input';
import { UpdateSellerInput } from './dto/update-seller.input';
import { Seller, SellerDocument } from './entities/seller.entity';
import { JwtService } from '../common/modules/jwt/jwt.service';
import { CacheService } from '../common/modules/redis/redis.service';

@Injectable()
export class SellerService {
  @Inject(JwtService)
  private readonly jwtService: JwtService;
  @Inject(CacheService)
  private readonly cacheService: CacheService;
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
  async getProfile(_id: ObjectId) {
    const name_space = `PROFILE:ADMIN:${_id}`;

    let seller = await this.cacheService.get(name_space);
    if (!seller) {
      seller = await this.findOne({ _id });
      await this.cacheService.set(name_space, seller, 60);
    }

    return seller;
  }

  async findOne(option?: FilterQuery<SellerDocument>, skipError = false) {
    const model = await this.sellerModel.findOne({
      ...option,
    });

    if (!model && !skipError) {
      throw new NotFoundException('No encontrado', 'Not found');
    }
    return model;
  }


  async updateSeller({ _id }: UpdateSellerInput) {
    const sellerExists = await this.sellerModel.findById(_id);

    if (!sellerExists) {
      throw new Error('Seller not found');
    }

    await this.sellerModel.findOneAndUpdate(
      { _id: _id },
      { isApproved: true },
      { new: true },
    );

    return 'Seller updated successfully';
  }

  async deleteSellerById({ _id }: UpdateSellerInput) {
    const seller = await this.sellerModel.findByIdAndDelete(_id);
    if (!seller) {
      throw new Error('Seller not found');
    }
    return 'Seller deleted successfully';
  }
}
