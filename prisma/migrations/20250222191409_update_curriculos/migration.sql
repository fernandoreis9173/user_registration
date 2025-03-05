-- CreateTable
CREATE TABLE "Curriculos" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "idade" INTEGER NOT NULL,
    "endereco" VARCHAR(100) NOT NULL,
    "bairro" VARCHAR(100) NOT NULL,
    "cidade" VARCHAR(100) NOT NULL,
    "proximo" VARCHAR(100) NOT NULL,
    "estado" VARCHAR(100) NOT NULL,
    "tempoMoradia" INTEGER NOT NULL,
    "tempocidade" VARCHAR(100) NOT NULL,
    "moradiaAntes" VARCHAR(100) NOT NULL,
    "telefone" VARCHAR(20) NOT NULL,
    "celular" VARCHAR(20) NOT NULL,
    "foneRecador" VARCHAR(20) NOT NULL,
    "localNascimento" VARCHAR(100) NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "rg" VARCHAR(20) NOT NULL,
    "orgaoEmissor" VARCHAR(50) NOT NULL,
    "dataEmissao" TIMESTAMP(3) NOT NULL,
    "cpf" VARCHAR(14) NOT NULL,
    "tituloEleitor" VARCHAR(20) NOT NULL,
    "zonaEleitoral" INTEGER NOT NULL,
    "secaoEleitoral" INTEGER NOT NULL,
    "numeroCarteiraProfissional" VARCHAR(20) NOT NULL,
    "serieCarteiraProfissional" VARCHAR(100) NOT NULL,
    "ufCarteiraProfissional" VARCHAR(2) NOT NULL,
    "numeroCarteiraMotorista" VARCHAR(20) NOT NULL,
    "categoria" VARCHAR(10) NOT NULL,
    "pis" VARCHAR(20) NOT NULL,
    "nomePais" VARCHAR(100) NOT NULL,
    "nomeMae" VARCHAR(100) NOT NULL,
    "filhos" VARCHAR(100) NOT NULL,
    "idadeFilhos" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Curriculos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Curriculos_rg_key" ON "Curriculos"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Curriculos_cpf_key" ON "Curriculos"("cpf");
