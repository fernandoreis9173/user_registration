/*
  Warnings:

  - Added the required column `idCurriculum` to the `Escolaridade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Escolaridade" ADD COLUMN     "idCurriculum" INTEGER NOT NULL;
