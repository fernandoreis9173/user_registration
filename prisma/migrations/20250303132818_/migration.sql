/*
  Warnings:

  - Added the required column `rgestado` to the `Curriculos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Curriculos" ADD COLUMN     "rgestado" VARCHAR(100) NOT NULL;
