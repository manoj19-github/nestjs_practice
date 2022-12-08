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
import { IUser } from './users/user.dto';

@Controller('/')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() body: IUser): any {
    return this.authService.generateToken(body);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('/private')
  getData(): string {
    return ' this is private DAta';
  }
}
