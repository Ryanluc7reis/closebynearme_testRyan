import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { IsString } from 'class-validator';

@Schema({ _id: false })
@ObjectType()
export class CategoriesReduced {
  @Prop({
    trim: true,
  })
  @Field(() => String)
  @IsString()
  name: string[];

  @Prop({
    default: [],
    trim: true,
  })
  @Field(() => String)
  @IsString()
  slug: string;
}
