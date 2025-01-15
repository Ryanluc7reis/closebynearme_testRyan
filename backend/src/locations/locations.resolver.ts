import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LocationsService } from './locations.service';
import { Location } from './entities/location.entity';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { SearchBaseInput } from '_protos/classes/search.base';
import { LocationsPaginateResponse } from './entities/locations.paginate';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { ObjectId } from 'mongoose';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Resolver(() => Location)
export class LocationsResolver {
  constructor(private readonly service: LocationsService) {}

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  async createLocation(
    @Args('input', {
      type: () => CreateLocationInput,
    })
    input: any,
  ) {
    return (await this.service.create(input))._id;
  }

  @Query(() => LocationsPaginateResponse, { name: 'listLocationsPaginated' })
  @UseGuards(AuthGuard)
  findAll(@Args('search') search: SearchBaseInput) {
    return this.service.findAll(search);
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  updateLocation(
    @Args('input', {
      type: () => UpdateLocationInput,
    })
    input: any,
  ) {
    return this.service.update(input);
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  removeLocation(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
    return this.service.remove(id);
  }

  @Mutation(() => String, {
    name: 'toggleLocationStatus',
  })
  @UseGuards(AuthGuard)
  toggleStatus(@Args('id', { type: () => GraphQLObjectId }) id: ObjectId) {
    return this.service.toggleStatus(id);
  }
}
