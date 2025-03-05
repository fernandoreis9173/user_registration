import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { InfoImportanteService } from './infoImportante.service';
import { Request, Response } from 'express';
import { InfoImportante } from './infoImportante.model';
import { JwtAuthGuard } from 'src/authentication/auth.guard';

@Controller('infoImportante')
export class InfoImportanteController {
  constructor(private readonly infoImportanteService: InfoImportanteService) {}

  @Get()
  // @UseGuards(JwtAuthGuard)
  async getAllInfoImportante(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const result = await this.infoImportanteService.getAllInfoImportante();
      return response.status(200).json({
        status: 'ok!',
        message: 'Successfully fetch data!',
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: 'ok!',
        message: 'Internal Server Error!',
      });
    }
  }

  @Post()
  async postInfoImportante(
    @Body() postData: InfoImportante,
  ): Promise<InfoImportante> {
    return this.infoImportanteService.createInfoImportante(postData);
  }

  @Get(':id')
  async getInfoImportante(
    @Param('id') id: number,
  ): Promise<InfoImportante | null> {
    return this.infoImportanteService.getInfoImportanteById(id);
  }

  @Delete(':id')
  async deleteInfoImportante(@Param('id') id: number): Promise<InfoImportante> {
    return this.infoImportanteService.deleteInfoImportante(id);
  }

  @Put(':id')
  async updateInfoImportante(
    @Param('id') id: number,
    @Body() postData: InfoImportante,
  ): Promise<InfoImportante> {
    return this.infoImportanteService.updateInfoImportante(id, postData);
  }
}
