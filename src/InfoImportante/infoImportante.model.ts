import { Prisma } from '@prisma/client';

export class InfoImportante {
  pqJobAgencia: string;
  pqIndicar: string;
  oqFazMelhor: string;
  gostaLavarRoupa: string;
  sabePassarRoupa: string;
  gostaLimpeza: string;
  comoLimpa: string;
  gostaCozinhar: string;
  oqCozinha: string;
  gostaCrianca: string;
  religiao: string;
  pernoite: string;
  morarEmprego: string;
  empregoAtual: string; //
  gostaAnimal: string;
  alergiaAnimal: string;
  fuma: string;
  diabetes: string;
  hipertensao: string;
  depressao: string;
  colesterol: string;
  problemaCardiaco: string;
  problemaColuna: string;
  visaoAudicao: string;
  alergiaOutros: string;
  examesQuais: string;
  uniforme: string;
  trabalharOutraCidade: string;

  // Relacionamento com o modelo Curriculos
  curriculoId: number; // Mantém a chave estrangeira, sem a necessidade de importar o tipo
}
