import { LoginInput } from '../auth/dto/login-input';
export declare class AuthResolver {
    private readonly svc;
    login(input: LoginInput): Promise<{
        accessToken: string;
        avatar: string;
        id: any;
        email: string;
        fullName: string;
        profile: [import("../../_protos/common").Roles.ADMIN];
        permissions: import("../../_protos/common").PermissionsMenu[];
        role: string;
    }>;
}
