-- CreateTable
CREATE TABLE "UsersNest" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "username" VARCHAR(45) NOT NULL,
    "email" VARCHAR(45) NOT NULL,

    CONSTRAINT "UsersNest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsersNest_username_key" ON "UsersNest"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UsersNest_email_key" ON "UsersNest"("email");
