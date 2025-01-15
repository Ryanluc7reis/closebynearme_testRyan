import { InputType, Field } from '@nestjs/graphql';
import { ArticlesType } from '_protos/common/enums/tags.enum';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { ObjectId } from 'mongoose';

@InputType()
export class CreateArticleInput {
  @Field(() => String)
  @IsString()
  title: string;

  @Field(() => String)
  @IsString()
  description: string;

  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  locationId: ObjectId;

  @Field(() => String)
  @IsString()
  locationName: string;

  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  categoryId: ObjectId;

  @Field(() => String)
  @IsString()
  categoryName: string;

  @Field(() => ArticlesType)
  @IsEnum(ArticlesType)
  type: ArticlesType;

  @Field(() => String, {
    nullable: true,
  })
  @IsString()
  @IsOptional()
  image: string;
}
