import { Model } from 'mongoose';
import { JwtService as Jwt } from '@nestjs/jwt';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Account,
  AccountDocument,
} from '../../../auth/entities/account.entity';
import * as bcrypt from 'bcryptjs';
import {
  Session,
  SessionDocument,
} from '../../../auth/entities/session.entity';
import { Roles, SessionState } from '../../../../_protos/common';
import { CacheService } from '../redis/redis.service';
import * as moment from 'moment';

@Injectable()
export class JwtService {
  private readonly jwt: Jwt;

  @InjectModel(Account.name) private accountModel: Model<AccountDocument>;
  @InjectModel(Session.name) private sessionModel: Model<SessionDocument>;

  @Inject(CacheService)
  private readonly cacheService: CacheService;

  constructor(jwt: Jwt) {
    this.jwt = jwt;
  }

  // Decoding the JWT token
  public async decode(token: string): Promise<unknown> {
    return this.jwt.decode(token, null);
  }

  // Get Session from AccessToken we get from verifySessionToken()
  public async validateSession(decoded: any) {
    const name_space = `TOKEN:*:${decoded.token}`;
    const sessions = await this.cacheService.getItemsByKey(name_space);
    if (!sessions[0]) {
      const session = await this.sessionModel.findOne({
        sessionToken: decoded.token,
      });
      if (!session) {
        return undefined;
      }
      await this.accountModel.updateOne(
        { id_token: session._id },
        {
          $set: {
            access_token: '',
            scope: [],
            id_token: null,
            session_state: SessionState.EXPIRED,
          },
        },
      );
      await session.deleteOne();
      return undefined;
    }
    const session: Session = await this.cacheService.get(sessions[0]);

    return session;
  }

  // Generate JWT Token
  public async generateAccessToken(
    session: SessionDocument,
    expires_at: any,
  ): Promise<string> {
    const objToken = {
      token: session.sessionToken,
      profile: session.role,
      create: new Date(),
      expires_at,
    };

    const accessToken = this.jwt.sign(objToken);

    await this.cacheService.deleteItemsByKey(`TOKEN:${session.userId}:*`);

    await this.cacheService.set(
      `TOKEN:${session.userId}:${session.sessionToken}`,
      session,
      moment(expires_at).diff(moment(), 'seconds'),
    );

    return accessToken;
  }

  // Validate User's password

  public isPasswordValid(password: string, userPassword: string): boolean {
    return bcrypt.compareSync(password, userPassword);
  }

  public encodePassword(password: string): string {
    const salt: string = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  verifySessionToken(token: string):
    | {
        token: string;
        profile: Roles;
        userId: string;
        create: Date;
        expires_at: Date | moment.Moment;
        iat: number;
      }
    | undefined {
    try {
      return this.jwt.verify(token);
    } catch (err) {
      return undefined;
    }
  }
}
