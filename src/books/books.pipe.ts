/* eslint-disable prettier/prettier */
import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { BookClass, BooksDto } from './books.dto';

// custom pipes
export class BookPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (value.price <= 500) return value;
    throw new BadRequestException('Validation Failed');
  }
}

export class AddBookPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    // eslint-disable-next-line prettier/prettier
    // class transformer object convert class
    const bookClass = plainToInstance(BookClass, value);

    const errors = await validate(bookClass);
    if (errors.length > 0) {
      throw new BadRequestException(
        'validation failed' + JSON.stringify(errors),
      );
    } else {
      return value;
    }
  }
  // class validation
}
