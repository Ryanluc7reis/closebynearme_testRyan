import { Session } from '../../../auth/entities/session.entity';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly jwtService;
    constructor();
    validate(sessionToken: string): Promise<Session | never>;
}
export {};
