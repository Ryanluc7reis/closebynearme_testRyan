/* eslint-disable prettier/prettier */
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { SellerService } from './seller.service';
import { CreateSellerInput } from './dto/create-seller.input';
//import { SellerPaginateResponse } from './entities/seller-paginate';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { Seller } from './entities/seller.entity';

@Resolver(() => Seller)
export class SellerResolver {
  constructor(private readonly sellerService: SellerService) {}

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  async createSeller(@Args('input') input: CreateSellerInput) {
    return this.sellerService.create(input);
  }
}
