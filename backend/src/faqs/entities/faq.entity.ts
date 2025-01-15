import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Status } from '_protos/common';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { Document, ObjectId, Schema as MongooseSchema } from 'mongoose';
import { Category } from 'src/categories/entities/category.entity';
import { Location } from 'src/locations/entities/location.entity';

export type FaqDocument = Faq & Document<Faq>;

@Schema({
  versionKey: false,
  timestamps: true,
  collection: 'faqs',
})
@ObjectType()
export class Faq {
  @Field(() => ID)
  _id: ObjectId;

  @Prop({
    required: true,
    trim: true,
  })
  @Field()
  @IsString()
  question: string;

  @Prop({
    required: true,
    trim: true,
  })
  @Field()
  @IsString()
  answer: string;

  @Prop({
    required: true,
    trim: true,
  })
  @IsString()
  @Field()
  slug: string;

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
    trim: true,
  })
  @Field(() => String)
  @IsString()
  categoryName: string;

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

  @Field(() => Status)
  @Prop({ default: Status.ACTIVE, type: typeof Status })
  @IsEnum(Status)
  status: Status;

  @Prop({ default: false })
  @IsBoolean()
  disabled: boolean;

  @Field(() => Date)
  @IsDate()
  createdAt: Date;
}

export const FaqSchema = SchemaFactory.createForClass(Faq);
