import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentAdmin = createParamDecorator(
  (data: unknown, context: ExecutionContext): string => {
    const type = context.getType();

    if (type === 'http') {
      const request = context.switchToHttp().getRequest();

      return request.user;
    }

    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);

export const CurrentClient = createParamDecorator(
  (data: unknown, context: ExecutionContext): string => {
    const type = context.getType();
    if (type === 'http') {
      const request = context.switchToHttp().getRequest();

      return request.user;
    }

    const ctx = GqlExecutionContext.create(context);

    return ctx.getContext().req.user;
  },
);
