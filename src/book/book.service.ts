import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/book.entity';
import * as fs from 'fs';
import * as path from 'path';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {

  private books: Book[] = [];
  private readonly filePath = path.join(__dirname, '../../db/books.json');

  constructor() {
    this.loadBooks();
  }

  private loadBooks() {
    const data = fs.readFileSync(this.filePath, 'utf-8');
    this.books = JSON.parse(data);
  }
  create(createBookDto: CreateBookDto) {
    const newBook: Book = {
      id: this.books.length + 1, // Simple ID generation
      title: createBookDto.title,
      author: createBookDto.author,
      publishedDate: createBookDto.publishedDate,
      isAvailable: createBookDto.isAvailable,
    };
    this.books.push(newBook);
    fs.writeFileSync(this.filePath, JSON.stringify(this.books, null, 2));
    return newBook;
  }
  private saveBooks() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.books, null, 2), 'utf-8');
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    const book = this.books.find(b => b.id === id);
    if (!book) throw new NotFoundException(`Livre #${id} non trouvé`);
    return book;
  }

  update(id: number, updateBookDto: UpdateBookDto): Book {
    const book = this.findOne(id);
    Object.assign(book, updateBookDto);
    this.saveBooks();
    return book;
  }

  remove(id: number): void {
    const index = this.books.findIndex(b => b.id === id);
    if (index === -1) throw new NotFoundException(`Livre #${id} non trouvé`);
    this.books.splice(index, 1);
    this.saveBooks();
  }

  filterByAvailability(isAvailable: boolean): Book[] {
    return this.books.filter(book => book.isAvailable === isAvailable);
  }

  paginate(page: number, limit: number): Book[] {
    const start = (page - 1) * limit;
    const end = start + limit;
    return this.books.slice(start, end);
  }

}
