import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { SellersModule } from './sellers/sellers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BooksModule, UsersModule, SellersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
