-- CreateTable
CREATE TABLE "Partners" (
    "id" SERIAL NOT NULL,
    "nameEmpresa" VARCHAR(100) NOT NULL,
    "cnpj" VARCHAR(45) NOT NULL,
    "localizacao" VARCHAR(100) NOT NULL,
    "foneComercial" VARCHAR(20) NOT NULL,
    "celular" VARCHAR(20) NOT NULL,
    "requisito" VARCHAR(100) NOT NULL,
    "turno" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Partners_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Partners_cnpj_key" ON "Partners"("cnpj");
