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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-paginate-v2" />
import { LocationStructured } from '../locations-structured/entities/location-structured';
import { SearchBaseInput } from '_protos/classes/search.base';
import { SearchArticleInput } from 'src/articles/dto/search-article.input';
import { Location } from 'src/locations/entities/location.entity';
export declare class LocationsStructuredResolver {
    private readonly locationService;
    private readonly companyService;
    private readonly articlesService;
    private readonly categoriesService;
    private readonly faqsService;
    private readonly schemaGeneratorService;
    findCategoriesByLocationBySlug(slug: string): Promise<import("mongoose").Document<unknown, {}, import("src/locations/entities/location.entity").LocationDocument> & Location & import("mongoose").Document<Location, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Location;
    }>>;
    findOneBySlug(slug: string, categorySlug: string): Promise<{
        location: import("mongoose").Document<unknown, {}, import("src/locations/entities/location.entity").LocationDocument> & Location & import("mongoose").Document<Location, any, any> & Required<{
            _id: import("mongoose").Schema.Types.ObjectId & Location;
        }>;
        category: import("mongoose").Document<unknown, {}, import("../categories/entities/category.entity").CategoryDocument> & import("../categories/entities/category.entity").Category & import("mongoose").Document<import("../categories/entities/category.entity").Category, any, any> & Required<{
            _id: import("mongoose").Schema.Types.ObjectId & import("../categories/entities/category.entity").Category;
        }>;
    }>;
    companies(data: LocationStructured, search: SearchBaseInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            name: number;
        };
    }, import("../companies/entities/company.entity").CompanyDocument> & import("../companies/entities/company.entity").Company & import("mongoose").Document<import("../companies/entities/company.entity").Company, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & import("../companies/entities/company.entity").Company;
    }>>>;
    faqs(data: LocationStructured, search: SearchBaseInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, import("mongoose").PaginateOptions, import("../faqs/entities/faq.entity").Faq> & import("../faqs/entities/faq.entity").Faq & Required<{
        _id: import("mongoose").Schema.Types.ObjectId;
    }>>>;
    articles(data: LocationStructured, search: SearchArticleInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            createdAt: number;
        };
    }, import("../articles/entities/article.entity").ArticleDocument> & import("../articles/entities/article.entity").Article & import("mongoose").Document<import("../articles/entities/article.entity").Article, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & import("../articles/entities/article.entity").Article;
    }>>>;
    findLocations(search: SearchBaseInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            name: number;
        };
    }, import("src/locations/entities/location.entity").LocationDocument> & Location & import("mongoose").Document<Location, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & Location;
    }>>>;
    triggerSchemaGenerator(): Promise<string>;
}
