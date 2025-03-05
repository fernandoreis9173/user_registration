import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication/auth.module';
import { BookModule } from './book/book.module';
import { CurriculosModule } from './curriculos/curriculos.module';
import { EscolaridadeModule } from './escolaridade/escolaridade.module';
import { LastJobModule } from './lastJob/lastJob.module';
import { InfoImportanteModule } from './InfoImportante/infoImportante.module';
import { PartnersModule } from './partners/partners.module';
import { AgendamentoModule } from './agendamento/agendamento.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    BookModule,
    CurriculosModule,
    EscolaridadeModule,
    LastJobModule,
    InfoImportanteModule,
    PartnersModule,
    AgendamentoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
