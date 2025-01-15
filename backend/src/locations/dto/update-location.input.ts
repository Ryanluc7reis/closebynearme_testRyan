import { ObjectId } from 'mongoose';
import { CreateLocationInput } from './create-location.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';

@InputType()
export class UpdateLocationData extends PartialType(CreateLocationInput) {}

@InputType()
export class UpdateLocationInput {
  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  _id: ObjectId;

  @Field(() => UpdateLocationData)
  @IsNotEmptyObject()
  data: UpdateLocationData;
}
