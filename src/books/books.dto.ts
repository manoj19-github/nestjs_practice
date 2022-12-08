import { IsNumber, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export interface BooksDto {
  bookId: string;
  title: string;
  price: number;
  published: number;
  author: string;
}
export interface IaddBookPayload {
  title: string;
  price: number;
  published: number;
  author: string;
}
export interface IEditBookPayload {
  bookdId: string;
  title?: string;
  price?: number;
  published?: number;
  author?: string;
}

export class BookClass {
  @IsString()
  title: string;
  @IsNumber()
  price: number;
  @IsNumber()
  published: number;
  @IsString()
  author: string;
}
