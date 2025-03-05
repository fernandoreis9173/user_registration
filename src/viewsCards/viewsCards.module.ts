import { Module } from "@nestjs/common";
import { ViewsCardsController } from "./viewsCards.controller";
import { ViewsCardsService } from "./viewsCards.service";
import { PrismaService } from "src/prisma.service";



@Module({
    controllers: [ViewsCardsController],
    providers: [ViewsCardsService, PrismaService]
})
export class BookModule{}