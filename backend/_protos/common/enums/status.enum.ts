import { registerEnumType } from '@nestjs/graphql';

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum StatusAllowed {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  EMPTY = '',
}

export enum ClientStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
}

export enum ClientStatusAllowed {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  EMPTY = '',
}

export enum AssetType {
  VIDEO = 'VIDEO',
  IMAGE = 'IMAGE',
}

export enum AllStatus {
  ACTIVE = 'ACTIVE',
  APPROVED = 'APPROVED',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
}

export enum AllStatusAllowed {
  ACTIVE = 'ACTIVE',
  APPROVED = 'APPROVED',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  EMPTY = '',
}

export enum FinanceStatus {
  PAGO_TC = 'PAGO_TC',
  MANUAL = 'MANUAL',
  PENDING = 'PENDING',
}

export enum FinanceStatusAllowed {
  PAGO_TC = 'PAGO_TC',
  MANUAL = 'MANUAL',
  PENDING = 'PENDING',
  EMPTY = '',
}

export enum DateTypeFilterAllowed {
  GTE = '$gte',
  LTE = '$lte',
  EMPTY = '',
}

export enum ProductStatus {
  INACTIVE = 'INACTIVE',
  EDIT_MODE = 'EDIT_MODE',
  DRAFT_MODE = 'DRAFT_MODE',
  ACTIVE = 'ACTIVE',
}

export enum MerchantPublishedStatus {
  PUBLISHED = 'PUBLISHED',
  NOT_LISTING = 'NOT_LISTING',
}

export enum MerchantPublishedStatusAllowed {
  PUBLISHED = 'PUBLISHED',
  NOT_LISTING = 'NOT_LISTING',
  EMPTY = 'EMPTY',
}

registerEnumType(MerchantPublishedStatus, {
  name: 'MerchantPublishedStatus',
});

registerEnumType(MerchantPublishedStatusAllowed, {
  name: 'MerchantPublishedStatusAllowed',
});

registerEnumType(ProductStatus, {
  name: 'ProductStatus',
});

registerEnumType(Status, {
  name: 'Status',
});

registerEnumType(StatusAllowed, {
  name: 'StatusAllowed',
});

registerEnumType(ClientStatus, {
  name: 'ClientStatus',
});

registerEnumType(ClientStatusAllowed, {
  name: 'ClientStatusAllowed',
});

registerEnumType(AssetType, {
  name: 'AssetType',
});

registerEnumType(AllStatus, {
  name: 'AllStatus',
});

registerEnumType(AllStatusAllowed, {
  name: 'AllStatusAllowed',
});

registerEnumType(FinanceStatus, {
  name: 'FinanceStatus',
});

registerEnumType(FinanceStatusAllowed, {
  name: 'FinanceStatusAllowed',
});

registerEnumType(DateTypeFilterAllowed, {
  name: 'DateTypeFilterAllowed',
});
