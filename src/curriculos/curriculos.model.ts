import { Prisma } from "@prisma/client";



export class Curriculos implements Prisma.CurriculosCreateInput {
    nome: string;
    idade: string;
    endereco: string;
    bairro: string;
    cidade: string;
    proximo: string;
    estado: string;
    tempoMoradia: string;
    tempocidade: string;
    moradiaAntes: string;
    casaPropria: string;
    valorAluguel: string;
    telefone: string;
    celular: string;
    foneRecador: string;
    localNascimento: string;
    dataNascimento: string;
    rg: string;
    orgaoEmissor: string;
    rgestado: string;
    dataEmissao: string;
    cpf: string;
    tituloEleitor: string;
    zonaEleitoral: string;
    secaoEleitoral: string;
    numeroCarteiraProfissional: string;
    serieCarteiraProfissional: string;
    ufCarteiraProfissional: string;
    numeroCarteiraMotorista: string;
    categoria: string;
    pis: string;
    nomePais: string;
    nomeMae: string;
    filhos: string;
    idadeFilhos: string;
  }
  