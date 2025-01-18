import { BasePaginateResponse, IDocs } from '../../../_protos/classes/paginate.base';
import { Location } from './location.entity';
export declare class LocationsPaginateResponse extends BasePaginateResponse implements IDocs<Location> {
    docs: Location[];
}
