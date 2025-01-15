import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';

@InputType()
export class UpdateCategoryData extends PartialType(CreateCategoryInput) {}

@InputType()
export class UpdateCategoryInput {
  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  _id: ObjectId;

  @Field(() => UpdateCategoryData)
  @IsNotEmptyObject()
  data: UpdateCategoryData;
}
