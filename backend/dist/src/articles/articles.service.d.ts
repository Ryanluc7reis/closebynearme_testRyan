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
import { OnModuleInit } from '@nestjs/common';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { Article, ArticleDocument } from './entities/article.entity';
import { SearchArticleInput } from './dto/search-article.input';
export declare class ArticlesService implements OnModuleInit {
    private readonly model;
    constructor(model: PaginateModel<ArticleDocument>);
    onModuleInit(): Promise<void>;
    slugValidator(name: string): Promise<{
        slug: string;
        document: import("mongoose").Document<unknown, {}, ArticleDocument> & Article & import("mongoose").Document<Article, any, any> & Required<{
            _id: import("mongoose").Schema.Types.ObjectId & Article;
        }>;
        alreadyExist: boolean;
    }>;
    create(input: CreateArticleInput): Promise<import("mongoose").Document<unknown, {}, ArticleDocument> & Article & import("mongoose").Document<Article, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Article;
    }>>;
    findAll({ all, page, perPage, q, status, type }: SearchArticleInput, locationId?: ObjectId, categoryId?: ObjectId): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            createdAt: number;
        };
    }, ArticleDocument> & Article & import("mongoose").Document<Article, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Article;
    }>>>;
    findOne(option: FilterQuery<ArticleDocument>, skipError?: boolean): Promise<import("mongoose").Document<unknown, {}, ArticleDocument> & Article & import("mongoose").Document<Article, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Article;
    }>>;
    update({ _id, data }: UpdateArticleInput): Promise<string>;
    toggleStatus(_id: ObjectId): Promise<string>;
    remove(_id: ObjectId): Promise<string>;
}
