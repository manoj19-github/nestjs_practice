import { Injectable } from '@nestjs/common';
import { BooksDto, IaddBookPayload, IEditBookPayload } from './books.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  private BooksData: BooksDto[] = [];
  addBooks(newBook: IaddBookPayload): BooksDto[] {
    const newBookData: BooksDto = {
      bookId: uuidv4(),
      title: newBook.title,
      published: newBook.published,
      author: newBook.author,
      price: newBook.price,
    };

    this.BooksData.push(newBookData);
    return this.BooksData;
  }
  editMyBooks(newBook: IEditBookPayload, oldBookId: string): BooksDto {
    const oldBookIndex = this.BooksData.findIndex(
      (self: BooksDto) => self.bookId === oldBookId,
    );
    const oldBookData: BooksDto = this.BooksData[oldBookIndex];
    const editBookData: BooksDto = this.BooksData[oldBookIndex];
    const oldBooksKey = Object.keys(oldBookData);
    const newBookPair = Object.entries(newBook);

    newBookPair.forEach(([key], index: number) => {
      const findKey = oldBooksKey.find((self) => self === key);
      if (findKey !== undefined) {
        editBookData[findKey] = newBookPair[index][1];
      }
    });
    this.BooksData[oldBookIndex] = editBookData;

    return this.BooksData[oldBookIndex];
  }
  deleteMyBooks(): string {
    return 'please delete my books';
  }
  getMyBooks(): string {
    return 'please get all books';
  }
  getBookById(id: string): string {
    return `please get the book by id : ${id}`;
  }
}
