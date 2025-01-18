import { Buyer } from './buyer.entity';
import { BasePaginateResponse, IDocs } from '../../../_protos/classes/paginate.base';
export declare class BuyerPaginateResponse extends BasePaginateResponse implements IDocs<Buyer> {
    docs: Buyer[];
}
