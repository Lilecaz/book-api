import { IsBoolean, IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
    @ApiProperty({ example: 'The Great Gatsby', description: 'Title of the book' })
    @IsString()
    title: string;

    @ApiProperty({ example: 'F. Scott Fitzgerald', description: 'Author of the book' })
    @IsString()
    author: string;

    @ApiProperty({ example: '1925-04-10', description: 'Publication date in ISO format' })
    @IsDateString()
    publishedDate: string;

    @ApiProperty({ example: true, description: 'Availability status of the book' })
    @IsBoolean()
    isAvailable: boolean;
}
