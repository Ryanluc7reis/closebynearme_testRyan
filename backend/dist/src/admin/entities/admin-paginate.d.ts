import { Admin } from './admin.entity';
import { BasePaginateResponse, IDocs } from '../../../_protos/classes/paginate.base';
export declare class AdminPaginateResponse extends BasePaginateResponse implements IDocs<Admin> {
    docs: Admin[];
}
