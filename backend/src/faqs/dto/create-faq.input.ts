import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { ObjectId } from 'mongoose';

@InputType()
export class CreateFaqInput {
  @Field()
  @IsString()
  question: string;

  @Field()
  @IsString()
  answer: string;

  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  locationId: ObjectId;

  @Field()
  @IsString()
  locationName: string;

  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  categoryId: ObjectId;

  @Field(() => String)
  @IsString()
  categoryName: string;
}
