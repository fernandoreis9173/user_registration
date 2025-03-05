-- CreateTable
CREATE TABLE "InfoImportante" (
    "id" SERIAL NOT NULL,
    "pqJobAgencia" VARCHAR(100) NOT NULL,
    "pqIndicar" VARCHAR(100) NOT NULL,
    "oqFazMelhor" VARCHAR(100) NOT NULL,
    "gostaLavarRoupa" VARCHAR(100) NOT NULL,
    "sabePassarRoupa" VARCHAR(100) NOT NULL,
    "gostaLimpeza" VARCHAR(100) NOT NULL,
    "comoLimpa" VARCHAR(100) NOT NULL,
    "gostaCozinhar" VARCHAR(100) NOT NULL,
    "oqCozinha" VARCHAR(100) NOT NULL,
    "gostaCrianca" VARCHAR(100) NOT NULL,
    "religiao" VARCHAR(100) NOT NULL,
    "pernoite" VARCHAR(100) NOT NULL,
    "morarEmprego" VARCHAR(100) NOT NULL,
    "empregoAtual" VARCHAR(100) NOT NULL,
    "gostaAnimal" VARCHAR(100) NOT NULL,
    "alergiaAnimal" VARCHAR(100) NOT NULL,
    "fuma" VARCHAR(100) NOT NULL,
    "diabetes" VARCHAR(100) NOT NULL,
    "hipertensao" VARCHAR(100) NOT NULL,
    "depressao" VARCHAR(100) NOT NULL,
    "colesterol" VARCHAR(100) NOT NULL,
    "problemaCardiaco" VARCHAR(100) NOT NULL,
    "problemaColuna" VARCHAR(100) NOT NULL,
    "visaoAudicao" VARCHAR(100) NOT NULL,
    "alergiaOutros" VARCHAR(100) NOT NULL,
    "examesQuais" VARCHAR(100) NOT NULL,
    "uniforme" VARCHAR(100) NOT NULL,
    "trabalharOutraCidade" VARCHAR(100) NOT NULL,
    "curriculoId" INTEGER NOT NULL,

    CONSTRAINT "InfoImportante_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InfoImportante" ADD CONSTRAINT "InfoImportante_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
