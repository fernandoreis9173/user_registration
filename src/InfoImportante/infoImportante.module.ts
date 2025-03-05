import { Module } from '@nestjs/common';
import { InfoImportanteController } from './infoImportante.controller';
import { InfoImportanteService } from './infoImportante.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [InfoImportanteController],
  providers: [InfoImportanteService, PrismaService],
})
export class InfoImportanteModule {}
