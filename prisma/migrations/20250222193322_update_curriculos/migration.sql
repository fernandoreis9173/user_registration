/*
  Warnings:

  - Changed the type of `numeroCarteiraProfissional` on the `Curriculos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `numeroCarteiraMotorista` on the `Curriculos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pis` on the `Curriculos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Curriculos" DROP COLUMN "numeroCarteiraProfissional",
ADD COLUMN     "numeroCarteiraProfissional" INTEGER NOT NULL,
DROP COLUMN "numeroCarteiraMotorista",
ADD COLUMN     "numeroCarteiraMotorista" INTEGER NOT NULL,
DROP COLUMN "pis",
ADD COLUMN     "pis" INTEGER NOT NULL;
