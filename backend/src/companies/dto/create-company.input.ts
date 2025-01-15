import { InputType, Field, Float, Int } from '@nestjs/graphql';
import { MerchantPublishedStatus, Status } from '_protos/common';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { ObjectId } from 'mongoose';
import { CategoryInput } from 'src/categories/dto/create-category.input';

@InputType()
export class CreateCompanyInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  address: string;

  @Field()
  @IsString()
  phoneNumber: string;

  @Field()
  @IsString()
  websiteUrl: string;

  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  locationId: ObjectId;

  @Field()
  @IsString()
  locationName: string;

  @Field()
  @IsString()
  locationSlug: string;

  @Field(() => [GraphQLObjectId])
  @IsArray()
  categoriesId: ObjectId[];

  @Field(() => [CategoryInput])
  @IsArray()
  categories: CategoryInput[];

  @Field()
  @IsString()
  googleMapsLink: string;

  @IsEnum(Status)
  @IsOptional()
  status?: Status = Status.INACTIVE;

  @IsOptional()
  slug?: string;

  @IsOptional()
  initialLetter?: string;

  @Field(() => Int, {
    defaultValue: 0,
  })
  @IsOptional()
  @IsNumber()
  reviewsAmount?: number;

  @Field(() => Float, {
    defaultValue: 0,
  })
  @IsOptional()
  @IsNumber()
  reviewsRating?: number;

  @Field(() => MerchantPublishedStatus)
  @IsEnum(Status)
  @IsOptional()
  merchantListingStatus?: MerchantPublishedStatus;
}
