import { Prisma } from "@prisma/client";



export class Agendamento implements Prisma.AgendamentoCreateInput{
    id: number;
    nomeEmpregada: string;
    turnoHora: string;    
    cnpj: string;         
    nomePatraos: string;   
    dataInicial: Date | string
    dataFinal: Date | string  
    localizacao: string;  
    receita: string;      
    despesas: string;     
}