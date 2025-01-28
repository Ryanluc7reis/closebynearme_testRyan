/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
import { Seller } from './seller.entity';
import {
  BasePaginateResponse,
  IDocs,
} from '../../../_protos/classes/paginate.base';

@ObjectType({
  implements: [BasePaginateResponse],
})
export class SellerPaginateResponse
  extends BasePaginateResponse
  implements IDocs<Seller>
{
  @Field(() => [Seller], { defaultValue: [] })
  docs: Seller[];
}
