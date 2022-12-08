import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';
import { AuthService } from './auth/auth.service';
import { AuthRoleGuard } from './auth/authRole.guard';
import { IUser } from './users/user.dto';

@Controller('/')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() body: IUser): any {
    return this.authService.generateToken(body);
  }
  @UseGuards(AuthGuard('jwt'), new AuthRoleGuard('admin'))
  @Get('/admin')
  getAdminData(): string {
    return ' this is admin DAta';
  }
  @UseGuards(AuthGuard('jwt'), new AuthRoleGuard('admin,customer,vendor'))
  @Get('/customer')
  getCustomerData(): string {
    return ' this is customer DAta';
  }
  @UseGuards(AuthGuard('jwt'), new AuthRoleGuard('admin,vendor'))
  @Get('/vendor')
  getVendorData(): string {
    return ' this is vendor DAta';
  }
}
