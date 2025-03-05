import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res,UseGuards } from "@nestjs/common";
import { EscolaridadeService } from "./escolaridade.service";
import { Request, Response } from 'express';
import { Escolaridade } from "./escolaridade.model";
import { JwtAuthGuard } from "src/authentication/auth.guard";


@Controller('escolaridade')
export class EscolaridadeController{

    constructor(private readonly escolaridadeService: EscolaridadeService){}

    @Get()
    // @UseGuards(JwtAuthGuard)
    async getAllEscolaridade(@Req() request: Request, @Res() response: Response):Promise<any>{
        try {
                const result = await this.escolaridadeService.getAllEscolaridade();
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
    async postEscolaridade(@Body() postData: Escolaridade): Promise<Escolaridade>{
        return this.escolaridadeService.createEscolaridade(postData)
    }

    @Get(':id')
    async getEscolaridade(@Param('id') id:number): Promise<Escolaridade | null>{
        return this.escolaridadeService.getEscolaridadeById(id)
    }

    @Delete(':id')
    async deleteEscolaridade(@Param('id') id:number): Promise<Escolaridade>{
        return this.escolaridadeService.deleteEscolaridade(id)
    }

    @Put(':id')
    async updateEscolaridade(@Param('id') id:number, @Body() postData: Escolaridade): Promise<Escolaridade>{
        return this.escolaridadeService.updateEscolaridade(id, postData)
    }
}