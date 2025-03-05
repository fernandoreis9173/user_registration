import { PrismaService } from 'src/prisma.service';
import { Partners } from './partners.model';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class PartnersService {
  constructor(private prisma: PrismaService) {}

  async getAllPartners(): Promise<Partners[]> {
    return this.prisma.partners.findMany();
  }

  async getPartners(id: number): Promise<Partners | null> {
    return this.prisma.partners.findUnique({
      where: { id: Number(id) },
    });
  }

  async createPartners(data: Partners): Promise<Partners> {
    const existing = await this.prisma.partners.findUnique({
      where: {
        cnpj: data.cnpj,
      },
    });

    if (existing) {
      throw new ConflictException('partners already exists');
    }
    return this.prisma.partners.create({
      data,
    });
  }

  async updatePartners(id: number, data: Partners): Promise<Partners> {
    return this.prisma.partners.update({
      where: { id: Number(id) },
      data: { ...data },
    });
  }

  async deletePartners(id: number): Promise<Partners> {
    return this.prisma.partners.delete({
      where: { id: Number(id) },
    });
  }
}
