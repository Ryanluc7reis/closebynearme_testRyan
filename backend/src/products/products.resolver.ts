import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Inject, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { ObjectId } from 'mongoose';
import {
  AmenitiesPaginateResponse,
  ProductsPaginateResponse,
} from './entities/products.paginate';
import { SearchProductInput } from './dto/search-product.input';
import { CreateAmenitiesInput } from './dto/create-amenities.input';
import { UpdateAmenitiesInput } from './dto/update-amenities.input';
import { Amenities } from './entities/amenities.entity';
import { ProductPopulate } from './entities/product-populate';
import { Status } from '_protos/common';
import { SearchBaseInput } from '_protos/classes/search.base';

@Resolver(() => Product)
export class ProductsResolver {
  @Inject()
  private readonly service: ProductsService;

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  async createProduct(
    @Args('input', {
      type: () => CreateProductInput,
    })
    input: any,
  ) {
    return (await this.service.create(input))._id.toString();
  }

  @Query(() => ProductsPaginateResponse, { name: 'listProductsPaginated' })
  @UseGuards(AuthGuard)
  findAll(
    @Args('search', {
      type: () => SearchProductInput,
    })
    search: any,
  ) {
    return this.service.findAll(search);
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  async createAmenities(
    @Args('input')
    input: CreateAmenitiesInput,
  ) {
    return (await this.service.createAmenities(input))._id.toString();
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  async updateAmenities(
    @Args('input', {
      type: () => UpdateAmenitiesInput,
    })
    input: any,
  ) {
    return await this.service.updateAmenities(input);
  }

  @Query(() => [Amenities])
  @UseGuards(AuthGuard)
  findAmenities(
    @Args('ids', { type: () => [GraphQLObjectId] }) ids: ObjectId[],
  ) {
    return this.service.getAmenities(ids);
  }

  @Query(() => AmenitiesPaginateResponse)
  @UseGuards(AuthGuard)
  listAmenitiesPaginated(@Args('search') search: SearchBaseInput) {
    return this.service.findAmenitiesAll(search);
  }

  @Query(() => Product, { name: 'findOneProduct' })
  @UseGuards(AuthGuard)
  findOne(@Args('id', { type: () => GraphQLObjectId }) _id: ObjectId) {
    return this.service.findOne({ _id });
  }

  @Query(() => ProductPopulate, { name: 'findOneProductPopulate' })
  async findOneProductPopulate(
    @Args('slug')
    slug: string,
  ) {
    return (
      await this.service.findOne({
        slug,
        status: Status.ACTIVE,
      })
    ).populate(['categoryId', 'locationId', 'companyId', 'amenities']);
  }

  @Query(() => ProductsPaginateResponse, { name: 'listProductsSameCompany' })
  async listProductsPopulateSameCompany(
    @Args('search', {
      type: () => SearchProductInput,
    })
    search: any,
    @Args('slug')
    slug: string,
  ) {
    return await this.service.findByFilterAll(
      {
        ...search,
      },
      slug,
    );
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  updateProduct(
    @Args('input', {
      type: () => UpdateProductInput,
    })
    input: any,
  ) {
    return this.service.update(input);
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  removeProduct(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
    return this.service.remove(id);
  }

  @Mutation(() => String, {
    name: 'toggleProductStatus',
  })
  @UseGuards(AuthGuard)
  toggleStatus(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
    return this.service.toggleStatus(id);
  }
}
