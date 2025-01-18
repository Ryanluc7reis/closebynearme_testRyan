import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
export declare class AuthGuard implements CanActivate {
    private readonly authService;
    constructor(authService: AuthService);
    getRequest(context: ExecutionContext): any;
    canActivate(context: ExecutionContext): Promise<boolean>;
}
