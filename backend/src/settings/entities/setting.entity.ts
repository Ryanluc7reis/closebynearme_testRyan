import { ObjectType, Field, Float, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsDate, IsNumber } from 'class-validator';
import { Document, ObjectId } from 'mongoose';

export type SettingDocument = Setting & Document<Setting>;

@Schema({
  collection: 'settings',
  timestamps: true,
  versionKey: false,
})
@ObjectType()
export class Setting {
  @Field(() => ID)
  _id: ObjectId;

  @Prop({
    default: 0,
  })
  @Field(() => Float)
  @IsNumber()
  serviceFee: number;

  @Field(() => Date)
  @IsDate()
  createdAt: Date;

  @Field(() => Date)
  @IsDate()
  updatedAt: Date;
}

export const SettingSchema = SchemaFactory.createForClass(Setting);
