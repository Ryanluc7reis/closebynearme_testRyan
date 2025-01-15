import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Status } from '_protos/common';
import { IsArray, IsBoolean, IsDate, IsEnum, IsString } from 'class-validator';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { Document, ObjectId, Schema as MongooseSchema } from 'mongoose';
import { CategoriesReduced } from 'src/categories/entities/categories.reduced.entity';
import { Category } from 'src/categories/entities/category.entity';

export type LocationDocument = Location & Document<Location>;

@Schema({
  versionKey: false,
  timestamps: true,
  collection: 'locations',
})
@ObjectType()
export class Location {
  @Field(() => ID)
  _id: ObjectId;

  @Prop({
    required: true,
    trim: true,
  })
  @Field()
  @IsString()
  name: string;

  @Prop({
    required: true,
    trim: true,
  })
  @IsString()
  @Field()
  slug: string;

  @Prop({
    default: '',
  })
  @Field()
  @IsString()
  image: string;

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

export const LocationSchema = SchemaFactory.createForClass(Location);
