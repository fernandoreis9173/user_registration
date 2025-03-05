import { PrismaService } from "src/prisma.service";
// import { TotalCurriculos } from "./viewsCards.model";
import { Injectable } from "@nestjs/common";


@Injectable()
export class ViewsCardsService{

    constructor(private prisma: PrismaService){}

    // async getAllViewsCards(): Promise<TotalCurriculos[]>{
    //     return this.prisma.viewsCards.findMany()
    // }


 }