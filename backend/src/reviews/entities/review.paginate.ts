import { Field, ObjectType } from '@nestjs/graphql';
import {
  BasePaginateResponse,
  IDocs,
} from '../../../_protos/classes/paginate.base';
import { Review } from './review.entity';

@ObjectType({
  implements: [BasePaginateResponse],
})
export class ReviewsPaginateResponse
  extends BasePaginateResponse
  implements IDocs<Review>
{
  @Field(() => [Review], { defaultValue: [] })
  docs: Review[];
}
