import { registerEnumType } from '@nestjs/graphql';

export enum ProductPriceType {
  DAY = 'DAY',
  HOUR = 'HOUR',
}

registerEnumType(ProductPriceType, {
  name: 'ProductPriceType',
});
