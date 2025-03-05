import { Module } from "@nestjs/common";
import { EscolaridadeController } from "./escolaridade.controller";
import { EscolaridadeService } from "./escolaridade.service";
import { PrismaService } from "src/prisma.service";



@Module({
    controllers: [EscolaridadeController],
    providers: [EscolaridadeService, PrismaService]
})
export class EscolaridadeModule{}