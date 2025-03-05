/*
  Warnings:

  - You are about to drop the column `casaPropria` on the `Curriculos` table. All the data in the column will be lost.
  - You are about to drop the column `valorAluguel` on the `Curriculos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Curriculos" DROP COLUMN "casaPropria",
DROP COLUMN "valorAluguel";
