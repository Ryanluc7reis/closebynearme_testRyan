import { BasePaginateResponse, IDocs } from '../../../_protos/classes/paginate.base';
import { Company } from './company.entity';
export declare class CompaniesPaginateResponse extends BasePaginateResponse implements IDocs<Company> {
    docs: Company[];
}
