import { IsNotEmpty } from 'class-validator';
import { CreateSellerInput } from './create-seller.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';

@InputType()
export class UpdateSellerData extends PartialType(CreateSellerInput) {}

@InputType()
export class UpdateSellerInput {
  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  _id: ObjectId;

  @Field(() => UpdateSellerData)
  @IsNotEmpty()
  data: UpdateSellerData;
}
