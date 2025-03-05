import { Module } from "@nestjs/common";
import { AgendamentoController } from "./agendamento.controller";
import { AgendamentoService } from "./agendamento.service";
import { PrismaService } from "src/prisma.service";



@Module({
    controllers: [AgendamentoController],
    providers: [AgendamentoService, PrismaService]
})
export class AgendamentoModule{}