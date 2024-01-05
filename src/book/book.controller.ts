import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res,UseGuards } from "@nestjs/common";
import { BookService } from "./book.service";
import { Request, Response } from 'express';
import { Book } from "./book.model";
import { JwtAuthGuard } from "src/authentication/auth.guard";


@Controller('book')
export class BookController{

    constructor(private readonly bookService: BookService){}

    @Get()
    // @UseGuards(JwtAuthGuard)
    async getAllBook(@Req() request: Request, @Res() response: Response):Promise<any>{
        try {
                const result = await this.bookService.getAllBook();
                return response.status(200).json({
                    status: 'ok!',
                    message: 'Successfully fetch data!',
                    result: result
                })
        } catch (err) {
            return response.status(500).json({
                status: 'ok!',
                message: 'Internal Server Error!'
            })
        }
    }

    @Post()
    async postBook(@Body() postData: Book): Promise<Book>{
        return this.bookService.createBook(postData)
    }

    @Get(':id')
    async getBook(@Param('id') id:number): Promise<Book | null>{
        return this.bookService.getBook(id)
    }

    @Delete(':id')
    async deleteBook(@Param('id') id:number): Promise<Book>{
        return this.bookService.deleteBook(id)
    }

    @Put(':id')
    async updateBook(@Param('id') id:number, @Body() postData: Book): Promise<Book>{
        return this.bookService.updateBook(id, postData)
    }
}