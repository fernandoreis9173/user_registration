import { PrismaService } from 'src/prisma.service';
import { Partners } from './partners.model';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class PartnersService {
  constructor(private prisma: PrismaService) {}

  async getAllPartners(): Promise<Partners[]> {
    return this.prisma.partners.findMany();
  }

  async getPartnerByCNPJ(cnpj: string): Promise<Partners | null> {
    try {

        if (!cnpj) {
            throw new Error("CNPJ não pode ser vazio!");
        }

        const parceiro = await this.prisma.partners.findUnique({
            where: { cnpj: cnpj.trim() } // O campo "cnpj" deve ser único no banco
        });

        if (!parceiro) {
            console.log(" Nenhum parceiro encontrado para:", cnpj);
        }

        return parceiro;
    } catch (error) {
        console.error("🔥 Erro Prisma:", error);
        throw new Error("Erro ao buscar parceiro no banco.");
    }
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
