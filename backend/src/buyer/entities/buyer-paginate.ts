/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
import { Buyer } from './buyer.entity';
import {
  BasePaginateResponse,
  IDocs,
} from '../../../_protos/classes/paginate.base';

@ObjectType({
  implements: [BasePaginateResponse],
})
export class BuyerPaginateResponse
  extends BasePaginateResponse
  implements IDocs<Buyer>
{
  @Field(() => [Buyer], { defaultValue: [] })
  docs: Buyer[];
}
