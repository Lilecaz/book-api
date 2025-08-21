import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Query } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Post()
  create(@Body() createBookDto: CreateBookDto): Book {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll(
    @Query('isAvailable') isAvailable?: string,
  ): Book[] {
    let results = this.bookService.findAll();

    if (isAvailable !== undefined) {
      const available = isAvailable === 'true';
      results = this.bookService.filterByAvailability(available);
    }

    return results;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Book {
    return this.bookService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ): Book {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): void {
    this.bookService.remove(id);
  }
}
