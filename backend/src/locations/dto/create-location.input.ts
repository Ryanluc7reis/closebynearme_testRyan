import { InputType, Field } from '@nestjs/graphql';
import { Status } from '_protos/common';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { ObjectId } from 'mongoose';
import { CategoryInput } from 'src/categories/dto/create-category.input';

@InputType()
export class CreateLocationInput {
  @Field()
  @IsString()
  name: string;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  image: string;

  @IsOptional()
  slug?: string;

  @IsEnum(Status)
  @IsOptional()
  status?: Status = Status.INACTIVE;

  @Field(() => [GraphQLObjectId])
  @IsArray()
  categoriesId: ObjectId[];

  @Field(() => [CategoryInput])
  @IsArray()
  categories: CategoryInput[];
}
