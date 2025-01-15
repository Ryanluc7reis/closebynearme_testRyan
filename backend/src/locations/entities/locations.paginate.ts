import { Field, ObjectType } from '@nestjs/graphql';
import {
  BasePaginateResponse,
  IDocs,
} from '../../../_protos/classes/paginate.base';
import { Location } from './location.entity';

@ObjectType({
  implements: [BasePaginateResponse],
})
export class LocationsPaginateResponse
  extends BasePaginateResponse
  implements IDocs<Location>
{
  @Field(() => [Location], { defaultValue: [] })
  docs: Location[];
}
