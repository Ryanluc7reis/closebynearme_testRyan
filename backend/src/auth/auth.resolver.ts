import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
  AuthResponseAdmin,
  AuthResponseSeller,
} from '../auth/dto/auth-response';
import { LoginInput } from '../auth/dto/login-input';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  @Inject(AuthService)
  private readonly svc: AuthService;

  @Mutation(() => AuthResponseAdmin)
  async login(@Args('input') input: LoginInput) {
    return this.svc.loginAdmin(input);
  }
  @Mutation(() => AuthResponseSeller)
  async loginSeller(@Args('input') input: LoginInput) {
    return this.svc.loginSeller(input);
  }
}
