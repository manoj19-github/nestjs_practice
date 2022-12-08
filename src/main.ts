import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BooksGuard } from './books/books.guard';
import globalMiddlewareOne from './middlewares/global';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddlewareOne);
  app.use(BooksGuard);
  await app.listen(4000);
}
bootstrap();
