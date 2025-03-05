import { Body, Controller, Delete, Get, Param, Put, Req, Res,Post, UseGuards } from "@nestjs/common";
import { PartnersService } from "./partners.service";
import { Request, Response } from 'express';
import { JwtAuthGuard } from "src/authentication/auth.guard";
import { Partners } from "./partners.model";

@Controller('partners')
export class PartnersController {
    constructor(private readonly partnersService : PartnersService){}

    @Get()
    // @UseGuards(JwtAuthGuard)
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
    async postPartners(@Body() postData: Partners): Promise<Partners> {
    return this.partnersService.createPartners(postData);
  }

    @Get(':id')
    async getPartners(@Param('id') id:number): Promise<Partners | null>{
        return this.partnersService.getPartners(id)
    }

    @Delete(':id')
    async deletePartners(@Param('id') id:number): Promise<Partners>{
        return this.partnersService.deletePartners(id)
    }

    @Put(':id')
    async updatePartners(@Param('id') id:number, @Body() postData: Partners): Promise<Partners>{
        return this.partnersService.updatePartners(id, postData)
    }
}