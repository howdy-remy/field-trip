-- CreateEnum
CREATE TYPE "WeightUnit" AS ENUM ('LB', 'OZ', 'G', 'KG');

-- CreateEnum
CREATE TYPE "Case" AS ENUM ('WORN', 'CONSUMABLE');

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "weight" INTEGER NOT NULL,
    "unit" "WeightUnit" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "case" "Case" NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
