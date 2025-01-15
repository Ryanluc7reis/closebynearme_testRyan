import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FaqsService } from './faqs.service';
import { Faq } from './entities/faq.entity';
import { CreateFaqInput } from './dto/create-faq.input';
import { UpdateFaqInput } from './dto/update-faq.input';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { ObjectId } from 'mongoose';
import { FaqsPaginateResponse } from './entities/faqs.paginate';
import { SearchBaseInput } from '_protos/classes/search.base';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Faq)
export class FaqsResolver {
  constructor(private readonly service: FaqsService) {}

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  async createFaq(
    @Args('input', {
      type: () => CreateFaqInput,
    })
    input: any,
  ) {
    return (await this.service.create(input))._id;
  }

  @Query(() => FaqsPaginateResponse, { name: 'listFaqsPaginated' })
  @UseGuards(AuthGuard)
  findAll(@Args('search') search: SearchBaseInput) {
    return this.service.findAll(search);
  }

  //   @Query(() => Faq, { name: 'findOneFaq' })
  //   @UseGuards(AuthGuard)
  //   findOne(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
  //     return this.service.findOne(id);
  //   }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  updateFaq(
    @Args('input', {
      type: () => UpdateFaqInput,
    })
    input: any,
  ) {
    return this.service.update(input);
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  removeFaq(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
    return this.service.remove(id);
  }

  @Mutation(() => String, {
    name: 'toggleFaqStatus',
  })
  @UseGuards(AuthGuard)
  toggleStatus(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
    return this.service.toggleStatus(id);
  }
}
