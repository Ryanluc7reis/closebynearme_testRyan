import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  @Field()
  name: string;

  @Field()
  @IsString()
  spaceRequirements: string;

  @Field()
  @IsString()
  supervision: string;

  @Field()
  @IsString()
  safety: string;

  @Field()
  @IsString()
  insurancePlan: string;

  @Field()
  @IsString()
  notification: string;
}

@InputType()
export class CategoryInput {
  _id: string;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  slug: string;
}
