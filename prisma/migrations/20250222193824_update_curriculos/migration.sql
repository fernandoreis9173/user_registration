-- DropIndex
DROP INDEX "Curriculos_cpf_key";

-- AlterTable
ALTER TABLE "Curriculos" ALTER COLUMN "cpf" SET DATA TYPE VARCHAR(100);
