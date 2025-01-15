/* eslint-disable prettier/prettier */
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { BuyerService } from './buyer.service';
import { CreateBuyerInput } from './dto/create-buyer.input';
import { CreateBuyerResponse } from './dto/create-buyer-response';
import { Buyer } from './entities/buyer.entity';

@Resolver(() => Buyer)
export class BuyerResolver {
  constructor(private readonly buyerService: BuyerService) {}

  @Mutation(() => CreateBuyerResponse)
  async createBuyer(
    @Args('createBuyerInput') createBuyerInput: CreateBuyerInput,
  ): Promise<CreateBuyerResponse> {
    try {
      await this.buyerService.create(createBuyerInput);
      return {
        message: 'Buyer created successfully!',
        success: true,
      };
    } catch (error) {
      console.error('Error creating buyer:', error.message);
      return {
        message: `Failed to create buyer: ${error.message}`,
        success: false,
      };
    }
  }

  @Query(() => [Buyer])
  async findBuyers(): Promise<Buyer[]> {
    return this.buyerService.findAll();
  }
  @Mutation(() => CreateBuyerResponse)
  async deleteBuyer(
    @Args('id', { type: () => String }) id: string,
  ): Promise<CreateBuyerResponse> {
    try {
      await this.buyerService.deleteBuyerById(id);
      return {
        message: 'Buyer deleted successfully!',
        success: true,
      };
    } catch (error) {
      console.error('Error deleting buyer:', error.message);
      return {
        message: `Failed to delete buyer: ${error.message}`,
        success: false,
      };
    }
  }
}
