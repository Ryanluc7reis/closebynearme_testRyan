import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString } from 'class-validator';
import { Document, ObjectId } from 'mongoose';

export type AmenitiesDocument = Amenities & Document<Amenities>;

@Schema({
  collection: 'amenities',
  versionKey: false,
})
@ObjectType()
export class Amenities {
  @Field(() => ID)
  _id: ObjectId;

  @Field()
  @Prop({ required: true })
  @IsString()
  name: string;

  @Field()
  @Prop({ required: true })
  @IsString()
  description: string;

  @Field()
  @Prop({ required: true })
  @IsString()
  icon: string;
}

export const AmenitiesSchema = SchemaFactory.createForClass(Amenities);
