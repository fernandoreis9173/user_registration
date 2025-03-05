import { PrismaService } from "src/prisma.service";
import { Curriculos } from "./curriculos.model";
import { Injectable } from "@nestjs/common";


@Injectable()
export class CurriculosService{

    constructor(private prisma: PrismaService){}

    async getAllCurriculos(): Promise<Curriculos[]>{
        
        return this.prisma.curriculos.findMany()
    }

    async getCurriculos(id:number): Promise<Curriculos | null>{
        return this.prisma.curriculos.findUnique({
            where: {id:Number(id)}
        })
    }

    async createCurriculos(data: Curriculos): Promise<Curriculos>{
        return this.prisma.curriculos.create({
            data,
        })
    }

    async updateCurriculos(id: number, data: Curriculos): Promise<Curriculos> {
        return this.prisma.curriculos.update({
            where: { id: Number(id) },
            data: {
                nome: data.nome,
                idade: data.idade,
                endereco: data.endereco,
                bairro: data.bairro,
                cidade: data.cidade,
                proximo: data.proximo,
                estado: data.estado,
                tempoMoradia: data.tempoMoradia,
                tempocidade: data.tempocidade,
                moradiaAntes: data.moradiaAntes,
                casaPropria: data.casaPropria,
                valorAluguel: data.valorAluguel,
                telefone: data.telefone,
                celular: data.celular,
                foneRecador: data.foneRecador,
                localNascimento: data.localNascimento,
                dataNascimento: data.dataNascimento,
                rg: data.rg,
                orgaoEmissor: data.orgaoEmissor,
                rgestado: data.rgestado,
                dataEmissao: data.dataEmissao,
                cpf: data.cpf,
                tituloEleitor: data.tituloEleitor,
                zonaEleitoral: data.zonaEleitoral,
                secaoEleitoral: data.secaoEleitoral,
                numeroCarteiraProfissional: data.numeroCarteiraProfissional,
                serieCarteiraProfissional: data.serieCarteiraProfissional,
                ufCarteiraProfissional: data.ufCarteiraProfissional,
                numeroCarteiraMotorista: data.numeroCarteiraMotorista,
                categoria: data.categoria,
                pis: data.pis,
                nomePais: data.nomePais,
                nomeMae: data.nomeMae,
                filhos: data.filhos,
                idadeFilhos: data.idadeFilhos,
                updatedAt: new Date() // Atualiza a data de modificação
            } 
        });
    }

    async deleteCurriculos(id:number): Promise<Curriculos>{
        return this.prisma.curriculos.delete({
            where: {id: Number(id)}
        })
    }

    async countCurriculos(): Promise<number> {
        return this.prisma.curriculos.count();
    }
 }