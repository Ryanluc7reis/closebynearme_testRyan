/* eslint-disable prettier/prettier */
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { SellerService } from './seller.service';
import { CreateSellerInput } from './dto/create-seller.input';
//import { SellerPaginateResponse } from './entities/seller-paginate';
//import { UseGuards } from '@nestjs/common';
//import { AuthGuard } from '../auth/auth.guard';
import { Seller } from './entities/seller.entity';

@Resolver(() => Seller)
export class SellerResolver {
  constructor(private readonly sellerService: SellerService) {}

  // @Mutation(() => String)
  // @UseGuards(AuthGuard)
  // async createSeller(@Args('input') input: CreateSellerInput) {
  //   const newSeller = await this.sellerService.create(input);
  //   return newSeller;
  // }
  @Mutation(() => String)
  async createBuyer(
    @Args('createSellerInput') createSellerInput: CreateSellerInput,
  ): Promise<any> {
    try {
      const newSeller = await this.sellerService.create(createSellerInput);
      return { message: `Created seller successfully`, data: newSeller };
    } catch (error) {
      console.error('Error creating buyer:', error.message);
      return {
        message: `Failed to create buyer: ${error.message}`,
        success: false,
      };
    }
  }
}
