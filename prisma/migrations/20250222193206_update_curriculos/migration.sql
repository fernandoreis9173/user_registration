/*
  Warnings:

  - Changed the type of `rg` on the `Curriculos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cpf` on the `Curriculos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Curriculos" DROP COLUMN "rg",
ADD COLUMN     "rg" INTEGER NOT NULL,
DROP COLUMN "cpf",
ADD COLUMN     "cpf" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Curriculos_rg_key" ON "Curriculos"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Curriculos_cpf_key" ON "Curriculos"("cpf");
