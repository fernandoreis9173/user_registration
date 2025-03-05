/*
  Warnings:

  - Added the required column `casaPropria` to the `Curriculos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorAluguel` to the `Curriculos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Curriculos" ADD COLUMN     "casaPropria" VARCHAR(100) NOT NULL,
ADD COLUMN     "valorAluguel" VARCHAR(100) NOT NULL;
