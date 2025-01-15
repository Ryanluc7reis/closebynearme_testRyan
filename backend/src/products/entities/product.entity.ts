import { ObjectType, Field, Float, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { Company } from 'src/companies/entities/company.entity';
import { Schema as MongooseSchema, ObjectId, Document } from 'mongoose';
import { ProductPriceType } from '_protos/common/enums/product.enum';
import { Status } from '_protos/common';
import { Category } from 'src/categories/entities/category.entity';
import { Location } from 'src/locations/entities/location.entity';
import { Amenities } from './amenities.entity';

export type ProductDocument = Product & Document<Product>;

@Schema({
  collection: 'products',
  timestamps: true,
  versionKey: false,
})
@ObjectType()
export class Product {
  @Field(() => ID)
  _id: ObjectId;

  @Field()
  @IsString()
  @Prop({
    required: true,
    trim: true,
  })
  name: string;

  @Field()
  @IsString()
  @Prop({
    required: true,
    trim: true,
  })
  description: string;

  @Prop({
    required: true,
    trim: true,
  })
  @IsString()
  @Field()
  slug: string;

  @Field(() => [String])
  @IsArray()
  @IsString()
  @Prop({
    default: [],
  })
  images: string[];

  @Field(() => Float)
  @IsNumber()
  @Prop({
    default: 0,
  })
  price: number;

  @Field(() => Float)
  @IsNumber()
  @Prop({
    default: 0,
  })
  full_price: number;

  @Field(() => ProductPriceType)
  @Prop({
    default: ProductPriceType.DAY,
    type: typeof ProductPriceType,
  })
  @IsEnum(ProductPriceType)
  priceType: ProductPriceType;

  @Field(() => Int)
  @IsNumber()
  @Prop({
    default: 2,
  })
  minimunDays: number;

  @Field(() => Float)
  @IsNumber()
  @Prop({
    default: 0,
  })
  serviceFee: number;

  @Prop({
    required: true,
    ref: Company.name,
    type: MongooseSchema.Types.ObjectId,
  })
  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  companyId: ObjectId;

  @Prop({
    required: true,
    ref: Category.name,
    type: MongooseSchema.Types.ObjectId,
  })
  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  categoryId: ObjectId;

  @Prop({
    required: true,
    ref: Location.name,
    type: MongooseSchema.Types.ObjectId,
  })
  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  locationId: ObjectId;

  @Field(() => Status)
  @Prop({ default: Status.ACTIVE, type: typeof Status })
  @IsEnum(Status)
  status: Status;

  @Prop({
    default: [],
    ref: Amenities.name,
    type: [MongooseSchema.Types.ObjectId],
  })
  @Field(() => [GraphQLObjectId])
  @IsArray()
  amenities: ObjectId[];

  @Field()
  @IsString()
  @Prop({ default: '' })
  spaceRequirements: string;

  @Field()
  @IsString()
  @Prop({ default: '' })
  supervision: string;

  @Field()
  @IsString()
  @Prop({ default: '' })
  safety: string;

  @Field()
  @IsString()
  @Prop({ default: '' })
  insurancePlan: string;

  @Field()
  @IsString()
  @Prop({
    default: '',
  })
  notification: string;

  @Prop({ default: false })
  @IsBoolean()
  disabled: boolean;

  @Field(() => Date)
  @IsDate()
  createdAt: Date;

  @Field(() => Date)
  @IsDate()
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
