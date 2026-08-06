import { prisma } from "@/prisma/prisma-client";

export const getFilterShop = async () => {
  try {
    const [] = await Promise.all([
      prisma.category.findMany(),
      prisma.priceRange.findMany(),
      prisma.color.findMany(),
    ]);
  } catch (error) {
    console.log(error);
  }
};
