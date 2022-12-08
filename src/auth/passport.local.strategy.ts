/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { IUser } from 'src/users/user.dto';

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super();
  }
  validate(username: string, password: string): IUser {
    const user = this.userService.getUserByName(username);
    if (!user) throw new UnauthorizedException();
    if (user.password === password) return user;
  }
}
