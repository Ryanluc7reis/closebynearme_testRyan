import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login-input';
import { AuthGuard } from './auth.guard';
import { CurrentAdmin } from './auth.decorator';
import { ObjectId } from 'mongoose';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService, // private readonly usersService: UsersService,
  ) {}

  @Post('/login')
  async signin(@Body() data: LoginInput) {
    const user = await this.authService.loginAdmin(data);

    return {
      accessToken: user.accessToken,
      userData: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        avatar: user.avatar,
        profile: user.profile,
        role: user.role,
      },
    };
  }

  @Get('/me')
  @UseGuards(AuthGuard)
  async me(@CurrentAdmin() adminId: ObjectId) {
    const user = await this.authService.adminProfile(adminId);
    return {
      userData: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        avatar: user.avatar,
        profile: user.profile,
        role: user.role,
      },
    };
  }

  @Get('/vertical-nav/data')
  @UseGuards(AuthGuard)
  async verticalNav(@CurrentAdmin() adminId: ObjectId) {
    const admin = await this.authService.adminProfile(adminId);
    const permissions: string[] = admin.permissions;

    return [
      {
        title: 'Dashboard',
        path: '/',
        icon: 'tabler:graph',
        auth: true,
        permission: 'DASHBOARD',
      },
      {
        icon: 'tabler:user-hexagon',
        title: 'Admins',
        auth: true,
        permission: 'ADMINS',
        path: '/admins/list',
      },
      {
        icon: 'tabler:category',
        title: 'Categories',
        auth: true,
        permission: 'CATEGORIES',
        path: '/categories/list',
      },
      {
        icon: 'tabler:location',
        title: 'Locations',
        auth: true,
        permission: 'LOCATIONS',
        path: '/locations/list',
      },
      {
        icon: 'tabler:building-warehouse',
        title: 'Companies',
        auth: true,
        permission: 'COMPANIES',
        path: '/companies/list',
      },
      {
        icon: 'tabler:brand-blogger',
        title: 'Articles',
        auth: true,
        permission: 'ARTICLES',
        children: [
          {
            title: 'List',
            path: '/articles/list',
          },
          {
            title: 'Create',
            path: '/articles/studio-creation',
          },
        ],
      },
      {
        icon: 'tabler:message-question',
        title: "FAQ's",
        path: '/faqs/list',
        auth: true,
        permission: 'FAQS',
      },
      {
        icon: 'tabler:settings-2',
        title: 'Settings',
        path: '/settings',
        auth: true,
        permission: 'SETTINGS',
      },
      {
        icon: 'tabler:settings-2',
        title: 'Buyers',
        path: '/buyers',
        auth: true,
        permission: 'BUYERS',
      },
      {
        icon: 'tabler:settings-2',
        title: 'Sellers',
        path: '/sellers',
        auth: true,
        permission: 'ADMINS',
      },
    ].filter((item) => permissions.includes(item.permission));
  }
}
