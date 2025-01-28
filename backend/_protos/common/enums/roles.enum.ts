import { registerEnumType } from '@nestjs/graphql';

export enum Roles {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
}

export enum RolesAllowed {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  EMPTY = '',
}

export enum AccountSchemaAllowed {
  ADMIN = 'ADMIN',
  CLIENT = 'CLIENT',
  SUPER_ADMIN = 'SUPER_ADMIN',
  MANAGER = 'MANAGER',
}

export enum Provider {
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
}

export enum Scopes {
  WEB = 'WEB',
  APP = 'APP',
  ADMIN = 'ADMIN',
}

export enum SessionState {
  AVAILABLE = 'AVAILABLE',
  EXPIRED = 'EXPIRED',
  GOING_TO_EXPIRED = 'GOING_TO_EXPIRED',
}

registerEnumType(Roles, {
  name: 'Roles',
});

registerEnumType(RolesAllowed, {
  name: 'RolesAllowed',
});

registerEnumType(AccountSchemaAllowed, {
  name: 'AccountSchemaAllowed',
});

registerEnumType(AccountSchemaAllowed, {
  name: 'AccountSchemaAllowed',
});

registerEnumType(Provider, {
  name: 'Provider',
});

registerEnumType(Scopes, {
  name: 'Scopes',
});

registerEnumType(SessionState, {
  name: 'SessionState',
});
