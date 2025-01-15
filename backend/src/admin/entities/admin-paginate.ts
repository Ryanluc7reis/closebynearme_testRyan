import { Field, ObjectType } from '@nestjs/graphql';
import { Admin } from './admin.entity';
import {
  BasePaginateResponse,
  IDocs,
} from '../../../_protos/classes/paginate.base';

@ObjectType({
  implements: [BasePaginateResponse],
})
export class AdminPaginateResponse
  extends BasePaginateResponse
  implements IDocs<Admin>
{
  @Field(() => [Admin], { defaultValue: [] })
  docs: Admin[];
}
