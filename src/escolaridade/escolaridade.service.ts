import { PrismaService } from "src/prisma.service";
import { Escolaridade } from "./escolaridade.model";
import { Injectable } from "@nestjs/common";


@Injectable()
export class EscolaridadeService{

    constructor(private prisma: PrismaService){}

    async getAllEscolaridade(): Promise<Escolaridade[]> {
        return this.prisma.escolaridade.findMany({
          include: {
            curriculo: true,  // Incluir o relacionamento 'curriculo'
          },
        });
      }
      
      async getEscolaridadeById(id: number): Promise<Escolaridade> {
        return this.prisma.escolaridade.findUnique({
          where: { id },
          include: {
            curriculo: true,  // Incluir o relacionamento 'curriculo'
          },
        });
      }
      
      async createEscolaridade(data: Escolaridade): Promise<Escolaridade> {
        return this.prisma.escolaridade.create({
          data: {
            ...data,
            curriculoId: data.curriculoId,  // Utilizando curriculoId ao invés de curriculo.connect
          },
          include: {
            curriculo: true,  // Incluir o relacionamento 'curriculo'
          },
        });
      }
      
      async updateEscolaridade(id: number, data: Escolaridade): Promise<Escolaridade> {
        return this.prisma.escolaridade.update({
          where: { id },
          data: {
            ...data,
            curriculoId: data.curriculoId,  // Utilizando curriculoId ao invés de curriculo.connect
          },
          include: {
            curriculo: true,  // Incluir o relacionamento 'curriculo'
          },
        });
      }
      
      async deleteEscolaridade(id: number): Promise<Escolaridade> {
        // Primeiro, buscar a Escolaridade com o relacionamento 'curriculo'
        const escolaridade = await this.prisma.escolaridade.findUnique({
          where: { id: Number(id) },
          include: { curriculo: true },  // Incluir o relacionamento 'curriculo'
        });
      
        if (!escolaridade) {
          throw new Error("Escolaridade não encontrada");
        }
      
        // Após obter a escolaridade, excluir
        await this.prisma.escolaridade.delete({
          where: { id: Number(id) },
        });
      
        // Retornar o objeto completo de escolaridade
        return escolaridade;
      }
 }