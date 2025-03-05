import { PrismaService } from 'src/prisma.service';
import { InfoImportante } from './infoImportante.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InfoImportanteService {
  constructor(private prisma: PrismaService) {}

  async getAllInfoImportante(): Promise<InfoImportante[]> {
    return this.prisma.infoImportante.findMany({
      include: {
        curriculo: true, // Incluir o relacionamento 'curriculo'
      },
    });
  }

  async getInfoImportanteById(id: number): Promise<InfoImportante> {
    return this.prisma.infoImportante.findUnique({
      where: { id },
      include: {
        curriculo: true, // Incluir o relacionamento 'curriculo'
      },
    });
  }

  async createInfoImportante(data: InfoImportante): Promise<InfoImportante> {
    return this.prisma.infoImportante.create({
      data: {
        ...data,
        curriculoId: data.curriculoId, // Utilizando curriculoId ao invés de curriculo.connect
      },
      include: {
        curriculo: true, // Incluir o relacionamento 'curriculo'
      },
    });
  }

  async updateInfoImportante(
    id: number,
    data: InfoImportante,
  ): Promise<InfoImportante> {
    return this.prisma.infoImportante.update({
      where: { id },
      data: {
        ...data,
        curriculoId: data.curriculoId, // Utilizando curriculoId ao invés de curriculo.connect
      },
      include: {
        curriculo: true, // Incluir o relacionamento 'curriculo'
      },
    });
  }

  async deleteInfoImportante(id: number): Promise<InfoImportante> {
    // Primeiro, buscar a InfoImportante com o relacionamento 'curriculo'
    const infoImportante = await this.prisma.infoImportante.findUnique({
      where: { id: Number(id) },
      include: { curriculo: true }, // Incluir o relacionamento 'curriculo'
    });

    if (!infoImportante) {
      throw new Error('InfoImportante não encontrada');
    }

    // Após obter a infoImportante, excluir
    await this.prisma.infoImportante.delete({
      where: { id: Number(id) },
    });

    // Retornar o objeto completo de infoImportante
    return infoImportante;
  }
}
