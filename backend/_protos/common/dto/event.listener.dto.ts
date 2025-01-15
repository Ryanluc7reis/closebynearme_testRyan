export enum EventType {
  ADMIN,
  SETTINGS,
  LOCATIONS,
  COMPANIES,
  ARTICLES,
  REVIEW,
  BUYERS
}

export interface EventPayload<T> {
  type: EventType;
  payload: T;
}
