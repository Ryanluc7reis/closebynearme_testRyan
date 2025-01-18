import { BasePaginateResponse, IDocs } from '../../../_protos/classes/paginate.base';
import { Article } from './article.entity';
export declare class ArticlesPaginateResponse extends BasePaginateResponse implements IDocs<Article> {
    docs: Article[];
}
