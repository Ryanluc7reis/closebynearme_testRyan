import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MerchantPublishedStatus, Status } from '_protos/common';
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
import { Document, ObjectId, Schema as MongooseSchema } from 'mongoose';
import { CategoriesReduced } from 'src/categories/entities/categories.reduced.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Location } from 'src/locations/entities/location.entity';

export type CompanyDocument = Company & Document<Company>;

@Schema({
  versionKey: false,
  timestamps: true,
  collection: 'companies',
})
@ObjectType()
export class Company {
  @Field(() => ID)
  _id: ObjectId;

  @Prop({
    required: true,
    trim: true,
  })
  @Field()
  @IsString()
  name: string;

  @Field(() => Float, {
    defaultValue: 0,
  })
  @IsNumber()
  @Prop({
    default: 0,
  })
  reviewsAmount: number;

  @Field(() => Float, {
    defaultValue: 0,
  })
  @IsNumber()
  @Prop({
    default: 0,
  })
  reviewsRating: number;

  @Field()
  @Prop({
    required: true,
    trim: true,
  })
  @IsString()
  initialLetter: string;

  @Prop({
    required: true,
    trim: true,
  })
  @IsString()
  @Field()
  slug: string;

  @Prop({ default: '', trim: true })
  @Field()
  @IsString()
  address: string;

  @Prop({ default: '', trim: true })
  @Field()
  @IsString()
  phoneNumber: string;

  @Prop({ default: '' })
  @Field()
  @IsString()
  websiteUrl: string;

  @Prop({
    default: [],
    ref: Category.name,
    type: [MongooseSchema.Types.ObjectId],
  })
  @Field(() => [GraphQLObjectId])
  @IsArray()
  categoriesId: ObjectId[];

  @Prop({ default: [] })
  @Field(() => [CategoriesReduced])
  @IsArray()
  categories: CategoriesReduced[];

  @Field(() => GraphQLObjectId)
  @Prop({
    required: true,
    ref: Location.name,
    type: MongooseSchema.Types.ObjectId,
  })
  @IsNotEmpty()
  locationId: ObjectId;

  @Prop({ required: true, trim: true })
  @Field()
  @IsString()
  locationName: string;

  @Prop({ required: true, trim: true })
  @Field(() => String, {
    defaultValue: '',
  })
  @IsString()
  locationSlug: string;

  @Prop({
    default: '',
  })
  @Field()
  @IsString()
  googleMapsLink: string;

  @Prop({
    type: typeof MerchantPublishedStatus,
    default: MerchantPublishedStatus.NOT_LISTING,
  })
  @Field(() => MerchantPublishedStatus, {
    defaultValue: MerchantPublishedStatus.NOT_LISTING,
  })
  @IsEnum(MerchantPublishedStatus)
  merchantListingStatus: MerchantPublishedStatus;

  @Field(() => Status)
  @Prop({ default: Status.INACTIVE, type: typeof Status })
  @IsEnum(Status)
  status: Status;

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

export const CompanySchema = SchemaFactory.createForClass(Company);
