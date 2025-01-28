import { registerEnumType } from '@nestjs/graphql';

export enum PermissionsMenu {
  DASHBOARD = 'DASHBOARD',
  ADMINS = 'ADMINS',
  CATEGORIES = 'CATEGORIES',
  LOCATIONS = 'LOCATIONS',
  COMPANIES = 'COMPANIES',
  ARTICLES = 'ARTICLES',
  FAQS = 'FAQS',
  SETTINGS = 'SETTINGS',
  BUYERS = 'BUYERS',
  SELLERS = 'SELLERS',
}

export enum PermissionAllowed {
  DASHBOARD = 'DASHBOARD',
  ADMINS = 'ADMINS',
  CATEGORIES = 'CATEGORIES',
  LOCATIONS = 'LOCATIONS',
  COMPANIES = 'COMPANIES',
  ARTICLES = 'ARTICLES',
  FAQS = 'FAQS',
  SETTINGS = 'SETTINGS',
  BUYERS = 'BUYERS',
  SELLERS = 'SELLERS',
  EMPTY = '',
}

registerEnumType(PermissionsMenu, {
  name: 'PermissionsMenu',
});

registerEnumType(PermissionAllowed, {
  name: 'PermissionAllowed',
});
