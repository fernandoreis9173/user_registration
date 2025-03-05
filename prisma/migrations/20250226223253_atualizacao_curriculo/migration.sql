/*
  Warnings:

  - You are about to drop the column `casapropria` on the `Curriculos` table. All the data in the column will be lost.
  - You are about to drop the column `valoraluguel` on the `Curriculos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Curriculos" DROP COLUMN "casapropria",
DROP COLUMN "valoraluguel";
