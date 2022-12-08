import { Injectable } from '@nestjs/common';
import { IUser } from './user.dto';

@Injectable()
export class UsersService {
  public users: IUser[] = [
    {
      username: 'user1',
      password: 'admin',
      email: 'admin@example.com',
      role: 'admin',
    },
    {
      username: 'user2',
      password: 'vendor',
      email: 'vendor@example.com',
      role: 'vendor',
    },
    {
      username: 'user3',
      password: 'customer',
      email: 'customer@example.com',
      role: 'customer',
    },
  ];
  getUserByName(userName: string): IUser | undefined {
    return this.users.find((u) => u.username === userName);
  }
}
