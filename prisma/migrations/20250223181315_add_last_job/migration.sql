-- CreateTable
CREATE TABLE "LastJob" (
    "id" SERIAL NOT NULL,
    "ultimoEmprego" VARCHAR(100) NOT NULL,
    "endereco" VARCHAR(100) NOT NULL,
    "cidade" VARCHAR(100) NOT NULL,
    "telefone" VARCHAR(20) NOT NULL,
    "celular" VARCHAR(20) NOT NULL,
    "funcao" VARCHAR(100) NOT NULL,
    "tempoDeTrabalho" INTEGER NOT NULL,
    "assinouCarteira" VARCHAR(100) NOT NULL,
    "dataEntrada" TIMESTAMP(3) NOT NULL,
    "dataSaida" TIMESTAMP(3) NOT NULL,
    "motivoSaida" VARCHAR(20) NOT NULL,
    "curriculoId" INTEGER NOT NULL,

    CONSTRAINT "LastJob_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LastJob" ADD CONSTRAINT "LastJob_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
