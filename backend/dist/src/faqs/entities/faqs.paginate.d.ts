import { BasePaginateResponse, IDocs } from '../../../_protos/classes/paginate.base';
import { Faq } from './faq.entity';
export declare class FaqsPaginateResponse extends BasePaginateResponse implements IDocs<Faq> {
    docs: Faq[];
}
