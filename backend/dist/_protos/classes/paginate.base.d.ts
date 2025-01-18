export interface IDocs<T> {
    docs: T[];
}
export declare abstract class BasePaginateResponse {
    page: number;
    prevPage: number;
    nextPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    totalDocs: number;
    totalPages: number;
}
