/*
  Warnings:

  - A unique constraint covering the columns `[basketId,productId,colorId]` on the table `BasketCard` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `colorId` to the `BasketCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BasketCard" ADD COLUMN     "colorId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BasketCard_basketId_productId_colorId_key" ON "BasketCard"("basketId", "productId", "colorId");

-- AddForeignKey
ALTER TABLE "BasketCard" ADD CONSTRAINT "BasketCard_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
