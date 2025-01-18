import { JwtService as Jwt } from '@nestjs/jwt';
import { Session, SessionDocument } from '../../../auth/entities/session.entity';
import { Roles } from '../../../../_protos/common';
import * as moment from 'moment';
export declare class JwtService {
    private readonly jwt;
    private accountModel;
    private sessionModel;
    private readonly cacheService;
    constructor(jwt: Jwt);
    decode(token: string): Promise<unknown>;
    validateSession(decoded: any): Promise<Session>;
    generateAccessToken(session: SessionDocument, expires_at: any): Promise<string>;
    isPasswordValid(password: string, userPassword: string): boolean;
    encodePassword(password: string): string;
    verifySessionToken(token: string): {
        token: string;
        profile: Roles;
        userId: string;
        create: Date;
        expires_at: Date | moment.Moment;
        iat: number;
    } | undefined;
}
