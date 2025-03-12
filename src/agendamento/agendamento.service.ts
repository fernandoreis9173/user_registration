import { PrismaService } from "src/prisma.service";
import { Agendamento } from "./agendamento.model";
import { Injectable } from "@nestjs/common";


@Injectable()
export class AgendamentoService{

    constructor(private prisma: PrismaService){}

    async getAllAgendamento(): Promise<Agendamento[]>{
        return this.prisma.agendamento.findMany()
    }

     // Função para calcular a diferença em dias
  private getDaysDifference(startDate: Date, endDate: Date): number {
    const oneDay = 24 * 60 * 60 * 1000; // Número de milissegundos em um dia
    const diffDays = Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / oneDay));
    return diffDays;
  }

  async getAllAgendamentoSoma(dataInicial: string, dataFinal: string): Promise<any> {
    const startDate = new Date(dataInicial);
    const endDate = new Date(dataFinal);
  
    const agendamentos = await this.prisma.agendamento.findMany({
      where: {
        dataInicial: {
          gte: startDate, // Greater Than or Equal to dataInicial
        },
        dataFinal: {
          lte: endDate, // Less Than or Equal to dataFinal
        },
      },
    });
  
    // Inicializando as somas de receita, despesas e os totais de receita por período
    let totalReceita = 0;
    let totalDespesas = 0;
    let totalReceitaDiaria = 0;
    let totalReceitaSemanal = 0;
    let totalReceitaAnual = 0;
  
    // Percorrendo os agendamentos para calcular as somas
    agendamentos.forEach(agendamento => {
      const { receita, despesas, dataInicial, dataFinal } = agendamento;
  
      const receitaNum = parseFloat(receita); // Convertendo a receita de string para número
      const despesasNum = parseFloat(despesas); // Convertendo as despesas de string para número
  
      const dias = this.getDaysDifference(new Date(dataInicial), new Date(dataFinal));
      const receitaDiaria = receitaNum / dias;
      const receitaSemanal = receitaNum / (dias / 7);
      const receitaAnual = receitaNum * (365 / dias); // Aproximação de um ano de 365 dias
  
      // Somando as receitas e despesas totais
      totalReceita += receitaNum;
      totalDespesas += despesasNum;
      totalReceitaDiaria += receitaDiaria;
      totalReceitaSemanal += receitaSemanal;
      totalReceitaAnual += receitaAnual;
    });
  
    // Calculando o lucro líquido (Receita - Despesas)
    const lucroLiquido = totalReceita - totalDespesas;
  
    return {
      receitaTotal: totalReceita.toFixed(2),
      despesasTotal: totalDespesas.toFixed(2),
      lucroLiquido: lucroLiquido.toFixed(2),
      receitaDiariaTotal: totalReceitaDiaria.toFixed(2),
      receitaSemanalTotal: totalReceitaSemanal.toFixed(2),
      receitaAnualTotal: totalReceitaAnual.toFixed(2),
    };
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