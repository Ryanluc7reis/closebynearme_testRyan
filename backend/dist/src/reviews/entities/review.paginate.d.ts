import { BasePaginateResponse, IDocs } from '../../../_protos/classes/paginate.base';
import { Review } from './review.entity';
export declare class ReviewsPaginateResponse extends BasePaginateResponse implements IDocs<Review> {
    docs: Review[];
}
