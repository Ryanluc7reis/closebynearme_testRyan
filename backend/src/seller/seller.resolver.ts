/* eslint-disable prettier/prettier */
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { SellerService } from './seller.service';
import { CreateSellerInput } from './dto/create-seller.input';
import { UpdateSellerInput } from './dto/update-seller.input';
import { LoginInputSeller } from 'src/auth/dto/login-input.seller';
//import { SellerPaginateResponse } from './entities/seller-paginate';
//import { UseGuards } from '@nestjs/common';
//import { AuthGuard } from '../auth/auth.guard';
import { Seller } from './entities/seller.entity';

@Resolver(() => Seller)
export class SellerResolver {
  constructor(private readonly sellerService: SellerService) {}

  @Mutation(() => String)
  async createSeller(@Args('input') input: CreateSellerInput) {
    return this.sellerService.create(input);
  }
  @Mutation(() => String)
  async loginSeller(@Args('input') input: LoginInputSeller) {
    return this.sellerService.findOne(input);
  }

  @Mutation(() => String)
  async updateSeller(@Args('input') input: UpdateSellerInput) {
    return this.sellerService.updateSeller(input);
  }
  @Query(() => [Seller])
  async findSellers() {
    return this.sellerService.findAll();
  }

  @Mutation(() => String)
  async deleteSeller(@Args('input') input: UpdateSellerInput) {
    return this.sellerService.deleteSellerById(input);
  }
}
