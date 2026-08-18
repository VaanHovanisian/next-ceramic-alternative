/*
  Warnings:

  - A unique constraint covering the columns `[basketId,productId,colorId]` on the table `BasketCard` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "BasketCard_basketId_productId_key";

-- CreateIndex
CREATE UNIQUE INDEX "BasketCard_basketId_productId_colorId_key" ON "BasketCard"("basketId", "productId", "colorId");
