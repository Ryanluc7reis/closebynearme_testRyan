import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import CONFIG from '../config';
import { Session } from '../../../auth/entities/session.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  @Inject(JwtService)
  private readonly jwtService: JwtService;

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: CONFIG.JWT_ACCESSTOKEN_SECRET,
      ignoreExpiration: true,
    });
  }

  validate(sessionToken: string): Promise<Session | never> {
    return this.jwtService.validateSession(sessionToken);
  }
}
