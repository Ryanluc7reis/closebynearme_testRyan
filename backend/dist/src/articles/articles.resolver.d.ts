/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-paginate-v2" />
import { ArticlesService } from './articles.service';
import { Article } from './entities/article.entity';
import { ObjectId } from 'mongoose';
import { SearchArticleInput } from './dto/search-article.input';
export declare class ArticlesResolver {
    private readonly service;
    constructor(service: ArticlesService);
    createArticle(input: any): Promise<import("mongoose").Schema.Types.ObjectId & Article>;
    findAll(search: SearchArticleInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            createdAt: number;
        };
    }, import("./entities/article.entity").ArticleDocument> & Article & import("mongoose").Document<Article, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Article;
    }>>>;
    findOne(_id: ObjectId): Promise<import("mongoose").Document<unknown, {}, import("./entities/article.entity").ArticleDocument> & Article & import("mongoose").Document<Article, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Article;
    }>>;
    updateArticle(input: any): Promise<string>;
    removeArticle(id: ObjectId): Promise<string>;
    toggleStatus(id: ObjectId): Promise<string>;
}
