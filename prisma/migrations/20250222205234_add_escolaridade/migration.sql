/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Escolaridade` table. All the data in the column will be lost.
  - You are about to drop the column `idCurriculum` on the `Escolaridade` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Escolaridade` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Escolaridade" DROP COLUMN "createdAt",
DROP COLUMN "idCurriculum",
DROP COLUMN "updatedAt",
ALTER COLUMN "serieFundamental" SET DATA TYPE TEXT,
ALTER COLUMN "serieMedio" SET DATA TYPE TEXT,
ALTER COLUMN "cursoSuperior" SET DATA TYPE TEXT,
ALTER COLUMN "pretendeCursar" SET DATA TYPE TEXT,
ALTER COLUMN "horario" SET DATA TYPE TEXT,
ALTER COLUMN "local" SET DATA TYPE TEXT;
