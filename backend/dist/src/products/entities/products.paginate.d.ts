import { BasePaginateResponse, IDocs } from '_protos/classes/paginate.base';
import { Product } from './product.entity';
import { Amenities } from './amenities.entity';
export declare class ProductsPaginateResponse extends BasePaginateResponse implements IDocs<Product> {
    docs: Product[];
}
export declare class AmenitiesPaginateResponse extends BasePaginateResponse implements IDocs<Amenities> {
    docs: Amenities[];
}
