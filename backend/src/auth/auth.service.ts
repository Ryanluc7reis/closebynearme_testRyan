import {
  BadRequestException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ObjectId, PaginateModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Account, AccountDocument } from '../auth/entities/account.entity';
import { JwtService } from '../common/modules/jwt/jwt.service';
import { SellerService } from '../seller/seller.service';
import { Seller } from '../seller/entities/seller.entity';
import { AdminService } from '../admin/admin.service';
import { Admin } from '../admin/entities/admin.entity';
import {
  AccountSchemaAllowed,
  Provider,
  Roles,
  Scopes,
  SessionState,
  Status,
} from '../../_protos/common';
import { Session, SessionDocument } from './entities/session.entity';
import { randomUUID } from 'crypto';
import * as moment from 'moment';
import { LoginInput } from './dto/login-input';
import { LoginInputSeller } from './dto/login-input.seller';

@Injectable()
export class AuthService {
  @Inject(JwtService)
  private readonly jwtService: JwtService;
  @Inject(AdminService)
  private readonly adminService: AdminService;
  @Inject(SellerService)
  private readonly sellerService: SellerService;

  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: PaginateModel<AccountDocument>,
    @InjectModel(Session.name)
    private readonly sessionModel: PaginateModel<SessionDocument>,
  ) {}

  async createSessionAdmin(data: Admin) {
    let account = await this.accountModel.findOne({ userId: data._id });
    let newAccount = false;
    const expires_at = data.profile.includes(Roles.ADMIN)
      ? moment().add(1, 'day')
      : moment().add(30, 'day');

    const session = new this.sessionModel({
      sessionToken: randomUUID(),
      role: data.profile,
      userId: data._id,
      timestamp: expires_at,
    });
    const access_token = await this.jwtService.generateAccessToken(
      session,
      expires_at,
    );

    if (!account) {
      account = new this.accountModel({
        userId: data._id,
        type: AccountSchemaAllowed.ADMIN,
        provider: Provider.EMAIL,
        access_token,
        expires_at,
        scope: [Scopes.ADMIN],
        id_token: session._id,
        session_state: SessionState.AVAILABLE,
      });
      newAccount = true;
    } else {
      await account.updateOne({
        $set: {
          access_token,
          scope: [Scopes.ADMIN],
          expires_at,
          id_token: session._id,
        },
      });
    }

    if (newAccount) {
      await account.save();
    }
    await session.save();
    await this.sessionModel.deleteMany({ _id: { $ne: session._id } });
    return access_token;
  }

  async createSessionSeller(data: Seller) {
    let account = await this.accountModel.findOne({ userId: data._id });
    let newAccount = false;
    const expires_at = moment().add(1, 'day');

    const session = new this.sessionModel({
      sessionToken: randomUUID(),
      role: data.role,
      userId: data._id,
      timestamp: expires_at,
    });
    const access_token = await this.jwtService.generateAccessToken(
      session,
      expires_at,
    );

    if (!account) {
      account = new this.accountModel({
        userId: data._id,
        type: AccountSchemaAllowed.CLIENT,
        provider: Provider.EMAIL,
        access_token,
        expires_at,
        scope: [Scopes.ADMIN],
        id_token: session._id,
        session_state: SessionState.AVAILABLE,
      });
      newAccount = true;
    } else {
      await account.updateOne({
        $set: {
          access_token,
          scope: [Scopes.ADMIN],
          expires_at,
          id_token: session._id,
        },
      });
    }

    if (newAccount) {
      await account.save();
    }
    await session.save();
    await this.sessionModel.deleteMany({ _id: { $ne: session._id } });
    return access_token;
  }

  async loginSeller({ email, password }: LoginInputSeller) {
    const seller = await this.sellerService.findOne({ email });

    if (!seller) {
      throw new NotFoundException('No encontrado', 'Not found');
    }

    const isPasswordValid: boolean = this.jwtService.isPasswordValid(
      password,
      seller.password,
    );

    if (!isPasswordValid) {
      throw new BadRequestException(
        'Email o contraseña incorrecta',
        'Email or Password incorrect',
      );
    }

    const sessionToken = await this.createSessionSeller(seller);

    return {
      accessToken: sessionToken,
      id: seller.id,
      email: seller.email,
      contactPersonName: seller.contactPersonName,
      isApproved: seller.isApproved,
    };
  }

  async loginAdmin({ email, password }: LoginInput) {
    const admin = await this.adminService.findOne({ email });

    if (!admin) {
      throw new NotFoundException('No encontrado', 'Not found');
    }

    const isPasswordValid: boolean = this.jwtService.isPasswordValid(
      password,
      admin.password,
    );

    if (!isPasswordValid) {
      throw new BadRequestException(
        'Email o contraseña incorrecta',
        'Email or Password incorrect',
      );
    }

    if (admin.status === Status.INACTIVE) {
      throw new BadRequestException(
        'Administrador desactivado',
        'Admin disabled',
      );
    }

    const sessionToken = await this.createSessionAdmin(admin);

    return {
      accessToken: sessionToken,
      avatar: admin.avatar,
      id: admin.id,
      email: admin.email,
      fullName: admin.fullName,
      profile: admin.profile,
      permissions: admin.permissions,
      role: admin.role,
    };
  }

  async adminProfile(adminId: ObjectId) {
    return await this.adminService.getProfile(adminId);
  }
  async sellerProfile(sellerId: ObjectId) {
    return await this.sellerService.getProfile(sellerId);
  }

  async validate(token: string) {
    const decoded = this.jwtService.verifySessionToken(token);

    if (!decoded) {
      return {
        status: HttpStatus.FORBIDDEN,
        error: ['Invalid Token'],
        userId: null,
      };
    }

    const session = await this.jwtService.validateSession(decoded);

    if (!session) {
      return {
        status: HttpStatus.CONFLICT,
        error: ['Session Expired'],
        userId: null,
      };
    }

    return {
      status: HttpStatus.OK,
      error: null,
      userId: session.userId as string,
    };
  }
}
