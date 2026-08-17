import { prisma } from "@/prisma/prisma-client";

export async function findOrCreateBasket(userId: string) {
  return prisma.basket.upsert({
    where: { userId },
    update: {},
    create: { userId },
  });
}
