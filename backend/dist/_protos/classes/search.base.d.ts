import { StatusAllowed } from '../common';
export declare class SearchBaseInput {
    q: string;
    sortColumn?: string;
    sort?: string;
    page: number;
    perPage: number;
    status: StatusAllowed;
    all: boolean;
}
