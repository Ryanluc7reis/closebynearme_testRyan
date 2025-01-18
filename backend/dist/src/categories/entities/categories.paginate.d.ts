import { BasePaginateResponse, IDocs } from '../../../_protos/classes/paginate.base';
import { Category } from './category.entity';
export declare class CategoriesPaginateResponse extends BasePaginateResponse implements IDocs<Category> {
    docs: Category[];
}
