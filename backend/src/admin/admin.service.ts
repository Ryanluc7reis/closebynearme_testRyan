import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './entities/admin.entity';
import { FilterQuery, ObjectId, PaginateModel } from 'mongoose';
import { CreateAdminInput } from './dto/create-admin.input';
import { JwtService } from '../common/modules/jwt/jwt.service';
import { PermissionsMenu, Roles, Status } from '../../_protos/common';
import { CacheService } from '../common/modules/redis/redis.service';
import { SearchAdminInput } from './dto/search-admin-input';
import { UpdateAdminInput } from './dto/update-admin.input';
import CONFIG from '../common/modules/config';
import { Recover, RecoverDocument } from './entities/recover.entity';
import {
  ChangePasswordInput,
  CheckRecoverIdInput,
  RecoverPasswordInput,
} from './dto/recover-password-input';
import * as bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import {
  createDefaultAdmin,
  loadDefaultAdmin,
  updateDefaultAdmin,
} from '../../libs/makeRandom';

@Injectable()
export class AdminService implements OnModuleInit {
  private readonly logger = new Logger(AdminService.name);
  @Inject(JwtService)
  private readonly jwtService: JwtService;
  @Inject(CacheService)
  private readonly cacheService: CacheService;

  constructor(
    @InjectModel(Admin.name)
    private readonly adminModel: PaginateModel<AdminDocument>,
    @InjectModel(Recover.name)
    private readonly recoverModel: PaginateModel<RecoverDocument>,
  ) {}

  async onModuleInit() {
    await this.handleCreateDefaultAdmin();
  }
  encryptPassword(password: string) {
    return bcrypt.hashSync(password, 10);
  }

  async handleCreateDefaultAdmin() {
    const defaultData = loadDefaultAdmin();

    let exists = await this.findOne(
      {
        $or: [
          {
            _id: defaultData._id,
          },
          {
            email: defaultData.email,
          },
        ],
      },
      true,
    );
    this.logger.debug('Searching default Admin');
    if (exists) {
      const permissions = Object.keys(PermissionsMenu) as PermissionsMenu[];
      const missingPermissions = permissions.filter(
        (item: PermissionsMenu) => !exists.permissions.includes(item),
      );
      const permissionsNotValid = exists.permissions.filter(
        (item: PermissionsMenu) => !permissions.includes(item),
      );

      if (missingPermissions.length || permissionsNotValid.length) {
        await this.update({
          _id: exists._id,
          data: {
            permissions,
          },
        });
      }
      return;
    }
    this.logger.warn('default Admin not found');
    const data = createDefaultAdmin();

    await this.create({
      email: data.email,
      password: data.password,
      fullName: 'Main Admin',
      avatar: '',
      fullRecord: true,
      profile: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.MANAGER],
      status: Status.ACTIVE,
      permissions: [
        PermissionsMenu.DASHBOARD,
        PermissionsMenu.ADMINS,
        PermissionsMenu.SETTINGS,
      ],
    });

    exists = await this.findOne({ email: defaultData.email }, true);

    const url = await this.recoverPassword({ email: data.email });
    updateDefaultAdmin({ ...data, url, _id: exists._id });
    this.logger.debug('default Admin was created_v1');
  }

  async create(data: CreateAdminInput) {
    const admin = await this.findOne({ email: data.email }, true);

    if (admin) {
      throw new BadRequestException(
        'El correo ya está registrado',
        'The mail is already registered',
      );
    }

    const newAdmin = new this.adminModel({
      ...data,
      password: this.jwtService.encodePassword(data.password),
      permissions: [PermissionsMenu.DASHBOARD, ...data.permissions],
    });

    await newAdmin.save();

    return 'Admin Created';
  }

  async update({ _id, data }: UpdateAdminInput) {
    const duplicated = await this.findOne(
      {
        email: data.email,
        _id: { $ne: _id },
      },
      true,
    );

    if (duplicated) {
      throw new BadRequestException('Email duplicado', 'Email duplicated');
    }

    const admin = await this.findOne({ _id });

    if (data.password) {
      data.password = this.jwtService.encodePassword(data.password);
    }

    await admin.updateOne({
      $set: {
        ...data,
        permissions: [PermissionsMenu.DASHBOARD, ...data.permissions],
      },
    });
    return 'Updated';
  }

  async findAll(option: FilterQuery<AdminDocument>) {
    return await this.adminModel.find(option);
  }

  async getProfile(_id: ObjectId) {
    const name_space = `PROFILE:ADMIN:${_id}`;

    let admin = await this.cacheService.get(name_space);
    if (!admin) {
      admin = await this.findOne({ _id });
      await this.cacheService.set(name_space, admin, 60);
    }

    return admin;
  }

  async findOne(option?: FilterQuery<AdminDocument>, skipError = false) {
    const model = await this.adminModel.findOne({
      ...option,
    });

    if (!model && !skipError) {
      throw new NotFoundException('No encontrado', 'Not found');
    }
    return model;
  }

  async updateStatus(_id: ObjectId) {
    const admin = await this.findOne({ _id });

    await admin.updateOne({
      $set: {
        status:
          admin.status === Status.ACTIVE ? Status.INACTIVE : Status.ACTIVE,
      },
    });

    return 'Admin status updated';
  }

  async findPaginateAndByFilter(
    { page, perPage, q, status, all }: SearchAdminInput,
    adminId: ObjectId,
  ) {
    const handleFilter = () => {
      let req: any = { disabled: false };
      if (q !== '') {
        req = {
          ...req,
          $or: [
            { fullName: { $regex: new RegExp(q, 'gi') } },
            { email: { $regex: new RegExp(q, 'gi') } },
            { phone: { $regex: new RegExp(q, 'gi') } },
          ],
        };
      }

      if (status !== '') {
        req = { ...req, status };
      }

      req = { ...req, profile: Roles.ADMIN };

      req = {
        ...req,
        _id: { $ne: adminId },
        profile: { $nin: [Roles.SUPER_ADMIN] },
      };

      return req;
    };

    return await this.adminModel.paginate(handleFilter(), {
      page,
      limit: perPage,
      pagination: !all,
      sort: {
        createdAt: 1,
      },
    });
  }

  async checkRecoverId({ secureId }: CheckRecoverIdInput) {
    const recover = await this.recoverModel.findOne({
      secureId,
    });

    if (!recover) {
      throw new BadRequestException(
        'El secureId no es valido',
        'Not valid secure ID',
      );
    }

    return 'Secure ID is valid';
  }

  async changePassword(data: ChangePasswordInput) {
    const recover = await this.recoverModel.findOne({
      secureId: data.secureId,
    });

    if (!recover) {
      throw new NotFoundException('No existe', 'Not found');
    }

    const admin = await this.findOne({ _id: recover.userId });

    const encryptedPassword = this.encryptPassword(data.password);
    const password = encryptedPassword;

    await admin.updateOne({
      password,
    });

    await recover.deleteOne();

    const defaultAdmin = loadDefaultAdmin();

    if (admin.id === defaultAdmin._id) {
      updateDefaultAdmin({
        password: '<encrypted>',
        fullRecord: true,
        url: '',
      });
    }

    return 'Done';
  }

  async recoverPassword({ email }: RecoverPasswordInput) {
    const admin = await this.adminModel.findOne({ email });

    if (!admin) {
      throw new NotFoundException(
        'El administrador no existe',
        'Admin not found',
      );
    }

    let recover = await this.recoverModel.findOne({
      userId: admin._id,
      profile: admin.profile,
    });

    if (!recover) {
      recover = await new this.recoverModel({
        secureId: uuid(),
        userId: admin._id,
        profile: admin.profile,
      }).save();
    }

    const url = `${CONFIG.ADMIN_FRONTEND_URL}/auth/change-password/${recover.secureId}?new=true`;

    const defaultAdmin = loadDefaultAdmin();

    if (admin.id === defaultAdmin._id) {
      updateDefaultAdmin({ url, fullRecord: false });
      this.logger.log(`New password request change for: ${email} ${url}`);
    }
    // await this.mailService.sendMail({
    //   context: {
    //     uri,
    //     email: admin.email,
    //   },
    //   to: admin.email,
    //   template_name: templateName,
    // });

    return url;
  }
}
