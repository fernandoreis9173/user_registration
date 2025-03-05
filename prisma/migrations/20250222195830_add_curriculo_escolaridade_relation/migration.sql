-- CreateTable
CREATE TABLE "Escolaridade" (
    "id" SERIAL NOT NULL,
    "idCurriculum" INTEGER NOT NULL,
    "fundamCompleto" BOOLEAN NOT NULL,
    "serieFundamental" VARCHAR(100) NOT NULL,
    "medioCompleto" BOOLEAN NOT NULL,
    "serieMedio" VARCHAR(100) NOT NULL,
    "superior" BOOLEAN NOT NULL,
    "cursoSuperior" VARCHAR(100) NOT NULL,
    "pretendeCursar" VARCHAR(100) NOT NULL,
    "horario" VARCHAR(100) NOT NULL,
    "local" VARCHAR(100) NOT NULL,
    "curriculoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Escolaridade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Escolaridade" ADD CONSTRAINT "Escolaridade_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
