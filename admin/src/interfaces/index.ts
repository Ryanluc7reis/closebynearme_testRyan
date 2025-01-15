export enum TableColumnsOptionsAction {
  UPDATE,
  TOGGLE_STATUS,
  REMOVE,
  SHOW_DIALOG
}

export enum SettingsTabType {
  BANNERS = 'banners',
  TAGS = 'tags',
  COUNTRIES = 'countries',
  CATEGORIES = 'categories',
  KEYWORD = 'keywords',
  COLLECTIONS = 'collections'
}

export const fallBackTable = {
  docs: undefined,
  limit: 10,
  page: 0,
  totalDocs: 1,
  totalPages: 0,
  hasNextPage: false,
  hasPrevPage: true,
  prevPage: null,
  nextPage: 2
}
