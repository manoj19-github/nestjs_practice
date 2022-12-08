/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AuthRoleGuard implements CanActivate {
  private rolePassed: string[] = [];
  constructor(role: string) {
    if (role.includes(',')) {
      this.rolePassed = role.split(',');
    } else {
      this.rolePassed = [role];
    }
  }
  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp();
    const request: any = ctx.getRequest<Request>();
    console.log('user data : ', request.user);
    console.log('rolepassed : ', this.rolePassed);
    return this.rolePassed.includes(request.user.role);
  }
}
