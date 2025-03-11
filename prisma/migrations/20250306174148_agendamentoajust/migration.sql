/*
  Warnings:

  - Added the required column `updatedAt` to the `Agendamento` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `dataInicial` on the `Agendamento` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dataFinal` on the `Agendamento` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Agendamento" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "dataInicial",
ADD COLUMN     "dataInicial" TIMESTAMP(3) NOT NULL,
DROP COLUMN "dataFinal",
ADD COLUMN     "dataFinal" TIMESTAMP(3) NOT NULL;
