import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { Admin } from './entities/admin.entity';
import { CreateAdminInput } from './dto/create-admin.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { CurrentAdmin } from '../auth/auth.decorator';
import { AdminPaginateResponse } from './entities/admin-paginate';
import { SearchAdminInput } from './dto/search-admin-input';
import { UpdateAdminInput } from './dto/update-admin.input';
import { ObjectId } from 'mongoose';
import {
  ChangePasswordInput,
  CheckRecoverIdInput,
  RecoverPasswordInput,
} from './dto/recover-password-input';
import GraphQLObjectId from 'graphql-type-object-id-no-deps';
// import { UpdateAdminInput } from './dto/update-admin.input';

@Resolver(() => Admin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Query(() => Admin)
  @UseGuards(AuthGuard)
  async me(@CurrentAdmin() adminId: ObjectId) {
    return await this.adminService.getProfile(adminId);
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  async createAdmin(@Args('input') input: CreateAdminInput) {
    return this.adminService.create(input);
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  async updateAdmin(
    @Args('input', {
      type: () => UpdateAdminInput,
    })
    input: any,
  ) {
    return this.adminService.update(input);
  }

  @Mutation(() => String)
  @UseGuards(AuthGuard)
  async toggleActiveInactiveAdmin(
    @Args('id', { type: () => GraphQLObjectId }) id: ObjectId,
  ) {
    return this.adminService.updateStatus(id);
  }

  @Query(() => AdminPaginateResponse, {
    name: 'listAdmin',
    description: 'List admins in Admin',
  })
  @UseGuards(AuthGuard)
  async findAll(
    @CurrentAdmin() admin: ObjectId,
    @Args('search') data: SearchAdminInput,
  ) {
    return await this.adminService.findPaginateAndByFilter(data, admin);
  }

  @Query(() => String)
  async checkRecoverSecureIdValid(
    @Args({ name: 'input' }) data: CheckRecoverIdInput,
  ) {
    return await this.adminService.checkRecoverId(data);
  }

  @Mutation(() => String, { name: 'recoverPasswordAdmin' })
  async recoverPassword(@Args({ name: 'input' }) data: RecoverPasswordInput) {
    await this.adminService.recoverPassword(data);
    return 'Done';
  }

  @Mutation(() => String, { name: 'changePasswordAdmin' })
  async changePassword(@Args({ name: 'input' }) data: ChangePasswordInput) {
    return await this.adminService.changePassword(data);
  }
}
