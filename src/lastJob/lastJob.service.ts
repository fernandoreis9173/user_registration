import { PrismaService } from 'src/prisma.service';
import { LastJob } from './lastJob.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LastJobService {
  constructor(private prisma: PrismaService) {}

  async getAllLastJob(): Promise<LastJob[]> {
    return this.prisma.lastJob.findMany({
      include: {
        curriculo: true, // Incluir o relacionamento 'curriculo'
      },
    });
  }

  async getLastJobById(id: number): Promise<LastJob> {
    return this.prisma.lastJob.findUnique({
      where: { id },
      include: {
        curriculo: true, // Incluir o relacionamento 'curriculo'
      },
    });
  }

  async createLastJob(data: LastJob): Promise<LastJob> {
    return this.prisma.lastJob.create({
      data: {
        ...data,
        curriculoId: data.curriculoId, // Utilizando curriculoId ao invés de curriculo.connect
      },
      include: {
        curriculo: true, // Incluir o relacionamento 'curriculo'
      },
    });
  }

  async updateLastJob(id: number, data: LastJob): Promise<LastJob> {
    return this.prisma.lastJob.update({
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

  async deleteLastJob(id: number): Promise<LastJob> {
    // Primeiro, buscar a LastJob com o relacionamento 'curriculo'
    const lastJob = await this.prisma.lastJob.findUnique({
      where: { id: Number(id) },
      include: { curriculo: true }, // Incluir o relacionamento 'curriculo'
    });

    if (!lastJob) {
      throw new Error('LastJob não encontrada');
    }

    // Após obter a lastJob, excluir
    await this.prisma.lastJob.delete({
      where: { id: Number(id) },
    });

    // Retornar o objeto completo de lastJob
    return lastJob;
  }
}
