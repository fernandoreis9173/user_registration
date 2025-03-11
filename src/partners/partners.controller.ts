import { Body, Controller, Delete, Get, Param, Put, Req, Res,Post, UseGuards, Query } from "@nestjs/common";
import { PartnersService } from "./partners.service";
import { Request, Response } from 'express';
import { JwtAuthGuard } from "src/authentication/auth.guard";
import { Partners } from "./partners.model";

@Controller('partners')
export class PartnersController {
    constructor(private readonly partnersService : PartnersService){}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllPartners(@Req() request: Request, @Res() response: Response):Promise<any>{
        try {
                const result = await this.partnersService.getAllPartners();
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
    async postPartners(@Body() postData: Partners): Promise<Partners> {
    return this.partnersService.createPartners(postData);
  }

  @Get('buscar')
    @UseGuards(JwtAuthGuard)
    async getPartnerByCNPJ(@Query('cnpj') cnpj: string, @Res() response: Response): Promise<any> {
        try {
            if (!cnpj) {
                return response.status(400).json({ message: '⚠️ CNPJ é obrigatório!' });
            }
    
            const parceiro = await this.partnersService.getPartnerByCNPJ(cnpj);
    
            if (!parceiro) {
                return response.status(404).json({ message: '❌ Parceiro não encontrado!' });
            }
    
            return response.status(200).json({
                status: 'ok',
                parceiro
            });
    
        } catch (err) {
            return response.status(500).json({
                message: 'Erro interno do servidor!',
                error: err.message
            });
        }
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getPartners(@Param('id') id:number): Promise<Partners | null>{
        return this.partnersService.getPartners(id)
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async deletePartners(@Param('id') id:number): Promise<Partners>{
        return this.partnersService.deletePartners(id)
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async updatePartners(@Param('id') id:number, @Body() postData: Partners): Promise<Partners>{
        return this.partnersService.updatePartners(id, postData)
    }

    
}