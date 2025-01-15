import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';
import { Review } from './entities/review.entity';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { ReviewsPaginateResponse } from './entities/review.paginate';
import { SearchBaseInput } from '_protos/classes/search.base';
import { ObjectId } from 'mongoose';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Review)
export class ReviewsResolver {
  constructor(private readonly service: ReviewsService) {}

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  createReview(
    @Args('input', {
      type: () => CreateReviewInput,
    })
    input: any,
  ) {
    return this.service.create(input);
  }

  @Query(() => ReviewsPaginateResponse, { name: 'listReviewsForCompany' })
  findAll(
    @Args('search') search: SearchBaseInput,
    @Args('companyId', {
      type: () => GraphQLObjectId,
    })
    companyId: ObjectId,
  ) {
    return this.service.findAll(search, companyId);
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  updateReview(
    @Args('input', {
      type: () => UpdateReviewInput,
    })
    input: any,
  ) {
    return this.service.update(input);
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  removeReview(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
    return this.service.remove(id);
  }

  @Mutation(() => String, {
    name: 'toggleReviewStatus',
  })
  @UseGuards(AuthGuard)
  toggleStatus(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
    return this.service.toggleStatus(id);
  }
}
