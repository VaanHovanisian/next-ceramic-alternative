import { prisma } from "@/prisma/prisma-client";
import { PriceRange } from "@prisma/client";
import { cacheLife, cacheTag } from "next/cache";

export interface GetSearchParams {
  category: string;
  price: string;
  color: string;
  sort: string;
  page: string;
  limit?: string;
}

export const getFilterProducts = async (
  params: GetSearchParams,
  priceRange: PriceRange[],
) => {
  "use cache";
  cacheLife("hours");
  cacheTag("filter-products");
  const category = params.category
    ? params.category.split(",").map(Number)
    : undefined;
  const color = params.color ? params.color.split(",").map(Number) : undefined;
  const fromId = params.price
    ? params.price.split(",").map(Number)[0]
    : undefined;
  const toId = params.price
    ? params.price.split(",").map(Number).at(-1)
    : undefined;
  const from = priceRange.find((el) => el.id === fromId)?.from;
  const to = priceRange.find((el) => el.id === toId)?.to;

  const [sortKey, sortValue] = params.sort
    ? params.sort.split("_")
    : ["id", "asc"];

  const products = await prisma.product.findMany({
    orderBy: {
      [sortKey]: sortValue,
    },
    where: {
      price: {
        gte: from,
        lte: to || undefined,
      },
      category: {
        id: { in: category },
      },
      color: {
        some: {
          id: { in: color },
        },
      },
    },
  });
  return products;
};
