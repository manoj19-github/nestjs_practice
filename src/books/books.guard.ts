import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class BooksGuard implements CanActivate {
  public key = 'myname is manoj santra';
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    if (request.headers['authorization'] === undefined) return false;
    const authKey = request.headers['authorization'].split('Bearer')[1].trim();
    return authKey === this.key;
  }
}
