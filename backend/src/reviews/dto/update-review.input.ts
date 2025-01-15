import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { CreateReviewInput } from './create-review.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ObjectId } from 'mongodb';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';

@InputType()
export class UpdateReviewData extends PartialType(CreateReviewInput) {}

@InputType()
export class UpdateReviewInput {
  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  _id: ObjectId;

  @Field(() => UpdateReviewData)
  @IsNotEmptyObject()
  data: UpdateReviewData;
}
