import { ObjectId } from 'mongoose';
import { CreateCompanyInput } from './create-company.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';

@InputType()
export class UpdateCompanyData extends PartialType(CreateCompanyInput) {}

@InputType()
export class UpdateCompanyInput {
  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  _id: ObjectId;

  @Field(() => UpdateCompanyData)
  @IsNotEmptyObject()
  data: UpdateCompanyData;
}
