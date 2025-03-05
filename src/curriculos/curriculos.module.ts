import { Module } from "@nestjs/common";
import { CurriculosController } from "./curriculos.controller";
import { CurriculosService } from "./curriculos.service";
import { PrismaService } from "src/prisma.service";



@Module({
    controllers: [CurriculosController],
    providers: [CurriculosService, PrismaService]
})
export class CurriculosModule{}