import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { Body, Param, Post } from '@nestjs/common/decorators';
import { IAddUserPayload, IUser } from './user.dto';

@Controller('users')
export class UsersController {
  private UsersData: IUser[] = [];
  private userId = 0;
  @Post('/')
  AddUser(@Body() newUser: IAddUserPayload): IUser[] {
    const newUserData: IUser = { ...newUser, id: ++this.userId };
    console.log('====================================');
    console.log('newUserData : ', newUserData);
    console.log('====================================');
    this.UsersData.push(newUserData);
    return this.UsersData;
  }
  @Get('/')
  getUsers(): IUser[] {
    return this.UsersData;
  }
  @Get('/:userId')
  getUserById(@Param('userId', ParseIntPipe) userId: number): IUser {
    const yourUser = this.UsersData.find(
      (self) => Number(self.id) === Number(userId),
    );
    return yourUser;
  }
}
