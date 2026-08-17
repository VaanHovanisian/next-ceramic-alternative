import { prisma } from "@/prisma/prisma-client";

export async function loadBasketItems(basketId: number) {
  const cards = await prisma.basketCard.findMany({
    where: { basketId },
    include: { product: true },
    orderBy: { createdAt: "asc" },
  });
  return cards.map((c) => ({ ...c.product, quantity: c.quantity }));
}
