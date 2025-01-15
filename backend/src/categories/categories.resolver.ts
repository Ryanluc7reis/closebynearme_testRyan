import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { CategoriesPaginateResponse } from './entities/categories.paginate';
import { SearchBaseInput } from '_protos/classes/search.base';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { ObjectId } from 'mongoose';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly service: CategoriesService) {}

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  createCategory(
    @Args('input', {
      type: () => CreateCategoryInput,
    })
    input: any,
  ) {
    return this.service.create(input);
  }

  @Query(() => CategoriesPaginateResponse, { name: 'listCategoriesPaginated' })
  @UseGuards(AuthGuard)
  findAll(
    @Args('search')
    search: SearchBaseInput,
  ) {
    return this.service.findAll(search);
  }

  //   @Query(() => Category, { name: 'findOneCategory' })
  //   @UseGuards(AuthGuard)
  //   findOne(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
  //     return this.service.findOne(id);
  //   }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  updateCategory(
    @Args('input', { type: () => UpdateCategoryInput })
    input: any,
  ) {
    return this.service.update(input);
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  removeCategory(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
    return this.service.remove(id);
  }

  @Mutation(() => String, {
    name: 'toggleCategoryStatus',
  })
  @UseGuards(AuthGuard)
  toggleStatus(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
    return this.service.toggleStatus(id);
  }
}
