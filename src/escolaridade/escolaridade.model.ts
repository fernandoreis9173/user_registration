import { Prisma } from "@prisma/client";


// export class Escolaridade implements Prisma.EscolaridadeCreateInput {
//   fundamCompleto: boolean;
//   serieFundamental: string;
//   medioCompleto: boolean;
//   serieMedio: string;
//   superior: boolean;
//   cursoSuperior: string;
//   pretendeCursar: string;
//   horario: string;
//   local: string;
  
//   // Propriedade para a chave estrangeira (idCurriculum)
//   idCurriculum: number;
  
//   // Relacionamento com o modelo Curriculos
//   curriculo: Prisma.Curriculos; // Usando o tipo correto gerado pelo Prisma
// }

export class Escolaridade {
  fundamCompleto: boolean;
  serieFundamental: string;
  medioCompleto: boolean;
  serieMedio: string;
  superior: boolean;
  cursoSuperior: string;
  pretendeCursar: string;
  horario: string;
  local: string;
  
  // Relacionamento com o modelo Curriculos
  curriculoId: number; // Mantém a chave estrangeira, sem a necessidade de importar o tipo
}