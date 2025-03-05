import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res,UseGuards } from "@nestjs/common";
import { ViewsCardsService } from "./viewsCards.service";
import { Request, Response } from 'express';
// import { TotalCurriculos } from "./viewsCards.model";
import { JwtAuthGuard } from "src/authentication/auth.guard";


@Controller('viewsCards')
export class ViewsCardsController{

    constructor(private readonly viewsCardsService: ViewsCardsService){}

    // @Get()
    // // @UseGuards(JwtAuthGuard)
    // async getAllViewsCards(@Req() request: Request, @Res() response: Response):Promise<any>{
    //     try {
    //             const result = await this.viewsCardsService.getAllViewsCards();
    //             return response.status(200).json({
    //                 status: 'ok!',
    //                 message: 'Successfully fetch data!',
    //                 result: result
    //             })
    //     } catch (err) {
    //         return response.status(500).json({
    //             status: 'ok!',
    //             message: 'Internal Server Error!'
    //         })
    //     }
    // }
}