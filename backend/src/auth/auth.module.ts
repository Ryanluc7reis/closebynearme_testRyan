import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthController } from './auth.controller';
import { SellerModule } from 'src/seller/seller.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './entities/account.entity';
import { SessionSchema, Session } from './entities/session.entity';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Account.name, schema: AccountSchema },
      { name: Session.name, schema: SessionSchema },
    ]),
    SellerModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthResolver],
  exports: [AuthService, SellerModule],
})
export class AuthModule {}
