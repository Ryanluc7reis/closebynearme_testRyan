import { InputType, Field, Float } from '@nestjs/graphql';
import { ProductPriceType } from '_protos/common/enums/product.enum';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { ObjectId } from 'mongoose';

@InputType()
export class CreateProductInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  description: string;

  @Field(() => Float)
  @IsNumber()
  serviceFee: number;

  @Field(() => [String])
  @IsArray()
  images: string[];

  @Field(() => Float)
  @IsNumber()
  price: number;

  @Field(() => Float)
  @IsNumber()
  full_price: number;

  @Field(() => ProductPriceType)
  @IsEnum(ProductPriceType)
  priceType: ProductPriceType;

  @Field(() => Float)
  @IsNumber()
  minimunDays: number;

  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  companyId: ObjectId;

  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  categoryId: ObjectId;

  @Field()
  @IsString()
  categoryName: string;

  @Field()
  @IsString()
  locationName: string;

  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  locationId: ObjectId;

  @Field()
  @IsString()
  spaceRequirements: string;

  @Field()
  @IsString()
  supervision: string;

  @Field()
  @IsString()
  safety: string;

  @Field()
  @IsString()
  insurancePlan: string;

  @Field()
  @IsString()
  notification: string;

  @Field(() => [GraphQLObjectId])
  @IsArray()
  amenities: ObjectId[];
}
