import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '_protos/common';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { ObjectId } from 'mongoose';

@InputType()
export class CreateReviewInput {
  @Field()
  @IsString()
  fullName: string;

  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  locationId: ObjectId;

  @Field()
  @IsString()
  locationName: string;

  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  companyId: ObjectId;

  @Field()
  @IsString()
  @IsOptional()
  description: string;

  @Field(() => Int)
  @IsNumber()
  amount: number;

  @IsEnum(Status)
  @IsOptional()
  status?: Status = Status.ACTIVE;
}
