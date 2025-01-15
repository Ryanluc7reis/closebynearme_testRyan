import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import CONFIG from '../config';
import { JwtStrategy } from './jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from './jwt.service';
import { Session, SessionSchema } from '../../../auth/entities/session.entity';
import { Account, AccountSchema } from '../../../auth/entities/account.entity';

const JWTModule = JwtModule.register({
  secret: CONFIG.JWT_ACCESSTOKEN_SECRET,
});

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Account.name,
        schema: AccountSchema,
      },
      {
        name: Session.name,
        schema: SessionSchema,
      },
    ]),
    JWTModule,
  ],
  providers: [JwtService, JwtStrategy],
  exports: [JwtService, JwtStrategy],
})
export class CustomJwtModule {}
