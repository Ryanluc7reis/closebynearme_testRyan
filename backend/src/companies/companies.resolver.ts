import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CompaniesService } from './companies.service';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { CompaniesPaginateResponse } from './entities/companies.paginate';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { ObjectId } from 'mongoose';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { SearchCompanyInput } from './dto/search-company.input';

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(private readonly service: CompaniesService) {}

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  async createCompany(
    @Args('input', {
      type: () => CreateCompanyInput,
    })
    input: any,
  ) {
    return (await this.service.create(input))._id;
  }

  @Query(() => CompaniesPaginateResponse, { name: 'listCompaniesPaginated' })
  @UseGuards(AuthGuard)
  findAll(@Args('search') search: SearchCompanyInput) {
    return this.service.findAll(search);
  }

  @Query(() => Company, { name: 'findOneCompany' })
  @UseGuards(AuthGuard)
  findOne(@Args('id', { type: () => GraphQLObjectId }) _id: ObjectId) {
    return this.service.findOne({ _id });
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  updateCompany(
    @Args('input', {
      type: () => UpdateCompanyInput,
    })
    input: any,
  ) {
    return this.service.update(input);
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  removeCompany(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
    return this.service.remove(id);
  }

  @Mutation(() => String, {
    name: 'toggleCompanyStatus',
  })
  @UseGuards(AuthGuard)
  toggleStatus(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
    return this.service.toggleStatus(id);
  }
}
