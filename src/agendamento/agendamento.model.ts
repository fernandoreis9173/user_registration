import { Prisma } from "@prisma/client";



export class Agendamento implements Prisma.AgendamentoCreateInput{
    id: number;
    nomeEmpregada: string;
    turnoHora: string;    
    cnpj: string;         
    nomePatraos: string;   
    dataInicial: string;  
    dataFinal: string;    
    localizacao: string;  
    receita: string;      
    despesas: string;     
}