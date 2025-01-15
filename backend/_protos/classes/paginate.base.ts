import { Field, Int, InterfaceType } from '@nestjs/graphql';

export interface IDocs<T> {
  docs: T[];
}

@InterfaceType()
export abstract class BasePaginateResponse {
  @Field(() => Int)
  page: number;

  @Field(() => Int, { nullable: true })
  prevPage: number;

  @Field(() => Int, { nullable: true })
  nextPage: number;

  @Field()
  hasNextPage: boolean;

  @Field()
  hasPrevPage: boolean;

  @Field(() => Int)
  limit: number;

  @Field(() => Int)
  totalDocs: number;

  @Field(() => Int)
  totalPages: number;
}
