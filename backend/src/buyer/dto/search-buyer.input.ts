import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { SearchBaseInput } from '../../../_protos/classes/search.base';

@InputType()
export class SearchBuyerInput extends SearchBaseInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  fullName?: string;
}
