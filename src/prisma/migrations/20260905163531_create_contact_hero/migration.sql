/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `HomeHero` table. All the data in the column will be lost.
  - Added the required column `updateAt` to the `HomeHero` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HomeHero" DROP COLUMN "updatedAt",
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "ContactHero" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "imgUrlMobile" TEXT NOT NULL,
    "imgUrlDesktop" TEXT NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactHero_pkey" PRIMARY KEY ("id")
);
