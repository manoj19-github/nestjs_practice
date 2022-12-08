import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { Body, UseGuards, UseInterceptors } from '@nestjs/common/decorators';
import { AddBookPipe } from './books.pipe';
import {
  BookClass,
  BooksDto,
  IaddBookPayload,
  IEditBookPayload,
} from './books.dto';
import { BooksService } from './books.service';
import { BooksGuard } from './books.guard';
import { BooksInterceptor } from './books.interceptor';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';

@Controller('books')
@UseInterceptors(BooksInterceptor)
@UseGuards(BooksGuard)
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Get('/')
  getAllBooks(): string {
    return this.booksService.getMyBooks();
  }
  @UseGuards(AuthGuard('local'))
  @Post('/')
  addBook(@Body(new ValidationPipe()) body: BookClass): BooksDto[] {
    return this.booksService.addBooks(body);
  }
  //   addBook(@Body(new AddBookPipe()) body: IaddBookPayload): BooksDto[] {
  //     return this.booksService.addBooks(body);
  //   }

  @Put('/:bookId')
  editBook(@Param('bookId') bookId: string, @Body() body: IEditBookPayload) {
    return this.booksService.editMyBooks(body, bookId);
  }
  @Get('/:bookId')
  getBookById(@Param() param): string {
    return this.booksService.getBookById(param.bookId);
  }
}
