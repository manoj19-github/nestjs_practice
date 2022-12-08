import { Injectable } from '@nestjs/common';
import { IUser } from './user.dto';

@Injectable()
export class UsersService {
  public users: IUser[] = [
    {
      username: 'user1',
      password: 'admin',
      email: 'admin@example.com',
    },
  ];
  getUserByName(userName: string): IUser | undefined {
    return this.users.find((u) => u.username === userName);
  }
}
