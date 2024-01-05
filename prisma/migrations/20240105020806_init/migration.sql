-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(100) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
