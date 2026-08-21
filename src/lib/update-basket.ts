import { prisma } from "@/prisma/prisma-client";

export const updateBasket = async (userId: string) => {
  const basket = await prisma.basket.findUnique({
    where: { userId },
    include: {
      basketCard: {
        include: {
          product: true,
          color: true,
        },
      },
    },
  });
  if (!basket) return;
  const totalAmount = basket.basketCard.reduce(
    (acc, el) => acc + el.product.price * el.quantity,
    0,
  );
  await prisma.basket.update({
    where: { id: basket.id },
    data: { totalAmount },
  });
  return { items: basket.basketCard, totalAmount };
};
