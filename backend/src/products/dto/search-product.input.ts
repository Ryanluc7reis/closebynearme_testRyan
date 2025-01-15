import { Field, InputType } from '@nestjs/graphql';
import { SearchBaseInput } from '../../../_protos/classes/search.base';
import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';

@InputType()
export class SearchProductInput extends SearchBaseInput {
  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  companyId?: ObjectId;

  locationId?: ObjectId;
  categoriesId?: ObjectId[];
}
