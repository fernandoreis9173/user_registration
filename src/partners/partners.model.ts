import { Prisma } from "@prisma/client";



export class Partners implements Prisma.PartnersCreateInput{
  nameEmpresa:   string;
  cnpj:          string;
  localizacao:   string;
  foneComercial: string;
  celular:       string;
  requisito:     string;
  turno:         string;
}