import {
  BadRequestException,
  Controller,
  Get,
  Post,
  UseFilters,
} from '@nestjs/common';
import { SellerException } from './seller.exception';
import { SellerCustomExceptionFilter } from './seller.exception.filter';

@Controller('sellers')
export class SellersController {
  @Post()
  //   @UseFilters(new SellerCustomExceptionFilter());
  getSellerData() {
    // throw new BadRequestException({
    //   status: 400,
    //   error: 'this is bad request',
    // });
    // throw new SellerException();
    throw new BadRequestException();
    return 'my name is manoj';
  }
}
