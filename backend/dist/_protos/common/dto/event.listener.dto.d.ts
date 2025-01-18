export declare enum EventType {
    ADMIN = 0,
    SETTINGS = 1,
    LOCATIONS = 2,
    COMPANIES = 3,
    ARTICLES = 4,
    REVIEW = 5,
    BUYERS = 6
}
export interface EventPayload<T> {
    type: EventType;
    payload: T;
}
