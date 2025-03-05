-- CreateTable
CREATE TABLE "Agendamento" (
    "id" SERIAL NOT NULL,
    "nomeEmpregada" VARCHAR(100) NOT NULL,
    "turnoHora" VARCHAR(100) NOT NULL,
    "cnpj" VARCHAR(100) NOT NULL,
    "nomePatraos" VARCHAR(100) NOT NULL,
    "dataInicial" VARCHAR(100) NOT NULL,
    "dataFinal" VARCHAR(100) NOT NULL,
    "localizacao" VARCHAR(100) NOT NULL,
    "receita" VARCHAR(100) NOT NULL,
    "despesas" VARCHAR(100) NOT NULL,

    CONSTRAINT "Agendamento_pkey" PRIMARY KEY ("id")
);
