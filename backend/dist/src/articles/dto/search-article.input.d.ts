import { SearchBaseInput } from '../../../_protos/classes/search.base';
import { ArticlesTypeAllowed } from '_protos/common/enums/tags.enum';
export declare class SearchArticleInput extends SearchBaseInput {
    type: ArticlesTypeAllowed;
}
