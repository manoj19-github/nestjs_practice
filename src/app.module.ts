import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { SellersModule } from './sellers/sellers.module';

@Module({
  imports: [BooksModule, UsersModule, SellersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
