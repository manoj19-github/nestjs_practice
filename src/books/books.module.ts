import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BooksMiddleware } from '../middlewares/books/books.middleware';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BooksMiddleware).forRoutes('books');
  }
}
