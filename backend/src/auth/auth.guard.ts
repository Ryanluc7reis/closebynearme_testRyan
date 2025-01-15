import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  getRequest(context: ExecutionContext) {
    const type = context.getType();

    if (type === 'http') {
      const request = context.switchToHttp().getRequest();

      return request;
    }
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    return request;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = this.getRequest(context);
    const authHeader = req.headers.authorization as string;

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header not found.');
    }
    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer') {
      throw new UnauthorizedException(
        `Authentication type \'Bearer\' required. Found \'${type}\'`,
      );
    }
    const { error, userId } = await this.authService.validate(token);

    if (error) {
      throw new UnauthorizedException(error[0]);
    }
    req.user = userId;

    return true;
  }
}
