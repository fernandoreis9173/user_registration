import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res,UseGuards } from "@nestjs/common";
import { CurriculosService } from "./curriculos.service";
import { Request, Response } from 'express';
import { Curriculos } from "./curriculos.model";
import { JwtAuthGuard } from "src/authentication/auth.guard";


@Controller('curriculos')
export class CurriculosController{

    constructor(private readonly curriculosService: CurriculosService){}

    @Get()
    // @UseGuards(JwtAuthGuard)
    async getAllCurriculos(@Req() request: Request, @Res() response: Response):Promise<any>{
        try {
                const result = await this.curriculosService.getAllCurriculos();
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

    @Get('count')
    async getCount(): Promise<{ total: number }> {
    const total = await this.curriculosService.countCurriculos();
    return { total };
}

    @Post()
    async postCurriculos(@Body() postData: Curriculos): Promise<Curriculos>{
        return this.curriculosService.createCurriculos(postData)
    }

    @Get(':id')
    async getCurriculos(@Param('id') id:number): Promise<Curriculos | null>{
        return this.curriculosService.getCurriculos(id)
    }

    @Delete(':id')
    async deleteCurriculos(@Param('id') id:number): Promise<Curriculos>{
        return this.curriculosService.deleteCurriculos(id)
    }

    @Put(':id')
    async updateCurriculos(@Param('id') id:number, @Body() postData: Curriculos): Promise<Curriculos>{
        return this.curriculosService.updateCurriculos(id, postData)
    }
}