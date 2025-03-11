import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res,UseGuards } from "@nestjs/common";
import { AgendamentoService } from "./agendamento.service";
import { Request, Response } from 'express';
import { Agendamento } from "./agendamento.model";
import { JwtAuthGuard } from "src/authentication/auth.guard";


@Controller('agendamento')
export class AgendamentoController{

    constructor(private readonly agendamentoService: AgendamentoService){}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllAgendamento(@Req() request: Request, @Res() response: Response):Promise<any>{
        try {
                const result = await this.agendamentoService.getAllAgendamento();
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
    @UseGuards(JwtAuthGuard)
    async postAgendamento(@Body() postData: Agendamento): Promise<Agendamento>{
        return this.agendamentoService.createAgendamento(postData)
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getAgendamento(@Param('id') id:number): Promise<Agendamento | null>{
        return this.agendamentoService.getAgendamento(id)
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async deleteAgendamento(@Param('id') id:number): Promise<Agendamento>{
        return this.agendamentoService.deleteAgendamento(id)
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async updateAgendamento(@Param('id') id:number, @Body() postData: Agendamento): Promise<Agendamento>{
        return this.agendamentoService.updateAgendamento(id, postData)
    }
}