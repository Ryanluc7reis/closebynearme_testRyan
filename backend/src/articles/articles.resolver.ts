import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { Article } from './entities/article.entity';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { ObjectId } from 'mongoose';
import { ArticlesPaginateResponse } from './entities/articles.paginate';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { SearchArticleInput } from './dto/search-article.input';

@Resolver(() => Article)
export class ArticlesResolver {
  constructor(private readonly service: ArticlesService) {}

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  async createArticle(
    @Args('input', {
      type: () => CreateArticleInput,
    })
    input: any,
  ) {
    return (await this.service.create(input))._id;
  }

  @Query(() => ArticlesPaginateResponse, { name: 'listArticlesPaginated' })
  @UseGuards(AuthGuard)
  findAll(
    @Args('search')
    search: SearchArticleInput,
  ) {
    return this.service.findAll(search);
  }

  @Query(() => Article, { name: 'findOneArticle' })
  @UseGuards(AuthGuard)
  findOne(@Args('id', { type: () => GraphQLObjectId }) _id: ObjectId) {
    return this.service.findOne({ _id });
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  updateArticle(
    @Args('input', {
      type: () => UpdateArticleInput,
    })
    input: any,
  ) {
    return this.service.update(input);
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  removeArticle(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
    return this.service.remove(id);
  }

  @Mutation(() => String, {
    name: 'toggleArticleStatus',
  })
  @UseGuards(AuthGuard)
  toggleStatus(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
    return this.service.toggleStatus(id);
  }
}
