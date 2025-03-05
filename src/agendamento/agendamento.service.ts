import { PrismaService } from "src/prisma.service";
import { Agendamento } from "./agendamento.model";
import { Injectable } from "@nestjs/common";


@Injectable()
export class AgendamentoService{

    constructor(private prisma: PrismaService){}

    async getAllAgendamento(): Promise<Agendamento[]>{
        return this.prisma.agendamento.findMany()
    }

    async getAgendamento(id:number): Promise<Agendamento | null>{
        return this.prisma.agendamento.findUnique({
            where: {id:Number(id)}
        })
    }

    async createAgendamento(data: Agendamento): Promise<Agendamento>{
        return this.prisma.agendamento.create({
            data,
        })
    }

    async updateAgendamento(id:number, data:Agendamento): Promise<Agendamento>{
        return this.prisma.agendamento.update({
            where: {id:Number(id)},
            data: { ...data },
        })
    }

    async deleteAgendamento(id:number): Promise<Agendamento>{
        return this.prisma.agendamento.delete({
            where: {id: Number(id)}
        })
    }
 }