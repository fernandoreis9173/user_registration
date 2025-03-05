import { Prisma } from '@prisma/client';

export class LastJob {
  ultimoEmprego: string;
  endereco: string;
  cidade: string;
  telefone: string;
  celular: string;
  funcao: string;
  tempoDeTrabalho: string;
  assinouCarteira: string;
  dataEntrada: string;
  dataSaida: string;
  motivoSaida: string;

  // Relacionamento com o modelo Curriculos
  curriculoId: number; // Mantém a chave estrangeira, sem a necessidade de importar o tipo
}
