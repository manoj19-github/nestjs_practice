/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUser, VUser } from 'src/users/user.dto';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  generateToken(payload: IUser) {
    const user = this.usersService.getUserByName(payload.username);
    if (user && user.password === payload.password) {
      return {
        user: { username: user.username, email: user.email },
        token: this.jwtService.sign(payload),
      };
    }
    return new UnauthorizedException();
  }
}
