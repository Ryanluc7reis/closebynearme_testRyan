import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Status } from '_protos/common';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { Document, ObjectId, Schema as MongooseSchema } from 'mongoose';
import { Company } from 'src/companies/entities/company.entity';
import { Location } from 'src/locations/entities/location.entity';

export type ReviewDocument = Review & Document<Review>;

@Schema({
  versionKey: false,
  collection: 'reviews',
  timestamps: true,
})
@ObjectType()
export class Review {
  @Field(() => ID)
  _id: ObjectId;

  @Prop({
    required: true,
    trim: true,
  })
  @Field()
  @IsString()
  fullName: string;

  @Prop({
    default: '',
    trim: true,
  })
  @Field()
  @IsString()
  description: string;

  @Field(() => GraphQLObjectId)
  @Prop({
    required: true,
    ref: Company.name,
    type: MongooseSchema.Types.ObjectId,
  })
  @IsNotEmpty()
  companyId: ObjectId;

  @Prop({
    default: 0,
  })
  @Field(() => Int)
  @IsNumber()
  amount: number;

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

  @Field(() => Date)
  @IsDate()
  updatedAt: Date;
}
export const ReviewSchema = SchemaFactory.createForClass(Review);
