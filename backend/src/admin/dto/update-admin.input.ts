import { IsNotEmpty } from 'class-validator';
import { CreateAdminInput } from './create-admin.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';

@InputType()
export class UpdateAdminData extends PartialType(CreateAdminInput) {}

@InputType()
export class UpdateAdminInput {
  @Field(() => GraphQLObjectId)
  @IsNotEmpty()
  _id: ObjectId;

  @Field(() => UpdateAdminData)
  @IsNotEmpty()
  data: UpdateAdminData;
}
