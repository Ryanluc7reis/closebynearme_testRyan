import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { CreateFaqInput } from './create-faq.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';

@InputType()
export class UpdateFaqData extends PartialType(CreateFaqInput) {}

@InputType()
export class UpdateFaqInput {
  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  _id: ObjectId;

  @Field(() => UpdateFaqData)
  @IsNotEmptyObject()
  data: UpdateFaqData;
}
