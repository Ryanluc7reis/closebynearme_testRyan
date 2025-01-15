import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { CreateArticleInput } from './create-article.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateArticleData extends PartialType(CreateArticleInput) {}

@InputType()
export class UpdateArticleInput {
  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  _id: ObjectId;

  @Field(() => UpdateArticleData)
  @IsNotEmptyObject()
  data: UpdateArticleData;
}
