import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { CreateAmenitiesInput } from './create-amenities.input';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateAmenitiesData extends PartialType(CreateAmenitiesInput) {}

@InputType()
export class UpdateAmenitiesInput {
  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  _id: ObjectId;

  @Field(() => UpdateAmenitiesData)
  @IsNotEmptyObject()
  data: UpdateAmenitiesData;
}
