import { prisma } from "@/prisma/prisma-client";
import { cacheLife, cacheTag } from "next/cache";

export const getFilterShop = async () => {
<<<<<<< HEAD
  "use cashe";
=======
  "use cache";
>>>>>>> Tagavor
  cacheLife("weeks");
  cacheTag("filter-shop");
  const [category, priceRange, color] = await Promise.all([
    prisma.category.findMany(),
    prisma.priceRange.findMany(),
    prisma.color.findMany(),
  ]);
  return { category, priceRange, color };
};
