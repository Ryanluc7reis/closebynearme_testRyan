import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Status } from '_protos/common';
import { ArticlesType } from '_protos/common/enums/tags.enum';
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

export type ArticleDocument = Article & Document<Article>;

@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'articles',
})
@ObjectType()
export class Article {
  @Field(() => ID)
  _id: ObjectId;

  @Prop({
    required: true,
    trim: true,
  })
  @Field()
  @IsString()
  title: string;

  @Prop({
    required: true,
    trim: true,
  })
  @Field()
  @IsString()
  description: string;

  @Prop({
    required: true,
    trim: true,
  })
  @Field()
  @IsString()
  slug: string;

  @Field()
  @Prop({
    default: '',
  })
  @IsString()
  image: string;

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

  @Field(() => ArticlesType)
  @Prop({
    default: ArticlesType.DEFAULT,
    type: typeof ArticlesType,
  })
  @IsEnum(ArticlesType)
  type: ArticlesType;

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

export const ArticleSchema = SchemaFactory.createForClass(Article);
