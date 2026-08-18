import { prisma } from "@/prisma/prisma-client";
import { findOrCreateBasket } from "./find-or-create-basket";
import { loadBasketItems } from "./load-basket-items";

export const updateTotalAmountBasket = async (userId: string) => {
  const basket = await findOrCreateBasket(userId);
  const items = await loadBasketItems(basket.id);
  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (totalAmount !== basket.totalAmount) {
    await prisma.basket.update({
      where: { id: basket.id },
      data: { totalAmount },
    });
  }

  return { items, totalAmount };
};
