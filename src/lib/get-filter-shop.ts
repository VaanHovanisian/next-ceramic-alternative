import { prisma } from "@/prisma/prisma-client";

export const getFilterShop = async () => {
  const [category, priceRange, color] = await Promise.all([
    prisma.category.findMany(),
    prisma.priceRange.findMany(),
    prisma.color.findMany(),
  ]);
  return { category, priceRange, color };
};
