/*
  Warnings:

  - You are about to drop the `ProductRange` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ProductRange";

-- CreateTable
CREATE TABLE "PriceRange" (
    "id" SERIAL NOT NULL,
    "from" INTEGER NOT NULL DEFAULT 0,
    "to" INTEGER,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PriceRange_pkey" PRIMARY KEY ("id")
);
