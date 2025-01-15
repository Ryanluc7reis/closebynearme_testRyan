import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Status } from '_protos/common';
import { IsBoolean, IsDate, IsEnum, IsString } from 'class-validator';
import { Document, ObjectId } from 'mongoose';

export type CategoryDocument = Category & Document<Category>;

@Schema({
  versionKey: false,
  timestamps: true,
  collection: 'categories',
})
@ObjectType()
export class Category {
  @Field(() => ID)
  _id: ObjectId;

  @Prop({
    required: true,
    trim: true,
  })
  @IsString()
  @Field()
  name: string;

  @Prop({
    required: true,
    trim: true,
  })
  @IsString()
  @Field()
  slug: string;

  @Field(() => Status)
  @Prop({ default: Status.INACTIVE, type: typeof Status })
  @IsEnum(Status)
  status: Status;

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
}

export const CategorySchema = SchemaFactory.createForClass(Category);
