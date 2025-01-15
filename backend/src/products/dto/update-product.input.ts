import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { CreateProductInput } from './create-product.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';

@InputType()
export class UpdateProductData extends PartialType(CreateProductInput) {}

@InputType()
export class UpdateProductInput {
  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  _id: ObjectId;

  @Field(() => UpdateProductData)
  @IsNotEmptyObject()
  data: UpdateProductData;
}
