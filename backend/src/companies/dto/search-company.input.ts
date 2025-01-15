import { Field, InputType } from '@nestjs/graphql';
import { MerchantPublishedStatus } from '../../../_protos/common';
import { SearchBaseInput } from '../../../_protos/classes/search.base';
import { IsArray, IsOptional } from 'class-validator';
import { ObjectId } from 'mongoose';

@InputType()
export class SearchCompanyInput extends SearchBaseInput {
  @Field(() => [MerchantPublishedStatus], {
    defaultValue: [],
  })
  @IsOptional()
  @IsArray()
  merchantListingStatus?: MerchantPublishedStatus[];

  locationId?: ObjectId;
  categoryId?: ObjectId;
}
