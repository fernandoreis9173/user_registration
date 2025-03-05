/*
  Warnings:

  - Added the required column `casapropria` to the `Curriculos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valoraluguel` to the `Curriculos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Curriculos" ADD COLUMN     "casapropria" VARCHAR(100) NOT NULL,
ADD COLUMN     "valoraluguel" VARCHAR(100) NOT NULL;
