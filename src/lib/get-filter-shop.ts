import { prisma } from "@/prisma/prisma-client";
import { cacheLife, cacheTag } from "next/cache";

export const getFilterShop = async () => {
  "use cache";
  cacheLife("weeks");
  cacheTag("filter-shop");
  const [category, priceRange, color] = await Promise.all([
    prisma.category.findMany(),
    prisma.priceRange.findMany(),
    prisma.color.findMany(),
  ]);
  return { category, priceRange, color };
};
