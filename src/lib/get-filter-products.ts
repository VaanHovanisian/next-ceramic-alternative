import { prisma } from "@/prisma/prisma-client";
import { PriceRange } from "@prisma/client";

export interface GetSearchParams {
  category: string;
  price: string;
  color: string;
  sort: string;
  page: string;
  limit?: string;
}
const LIMIT = 6;
export const getFilterProducts = async (
  params: GetSearchParams,
  priceRange: PriceRange[],
) => {
  const page = params.page ? Number(params.page) : 1;
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

  const [products, count] = await Promise.all([
    prisma.product.findMany({
      orderBy: {
        [sortKey]: sortValue,
      },
      take: LIMIT,
      skip: (page - 1) * LIMIT,
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
      include: {
        color: true,
      },
    }),
    prisma.product.count(),
  ]);
  const totalPages = Math.ceil(count / LIMIT);

  return { products, count, totalPages, page };
};
