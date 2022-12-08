/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus } from '@nestjs/common';

export class SellerException extends HttpException {
  constructor() {
    super('this is my custom seller exception', HttpStatus.BAD_REQUEST);
  }
}
