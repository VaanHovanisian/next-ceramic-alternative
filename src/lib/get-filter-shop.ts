import { prisma } from "@/prisma/prisma-client";

export const getFilterShop = async () => {
  try {
    const [category, priceRange, color] = await Promise.all([
      prisma.category.findMany(),
      prisma.priceRange.findMany(),
      prisma.color.findMany(),
    ]);
    return { category, priceRange, color };
  } catch (error) {
    console.log(error);
  }
};
