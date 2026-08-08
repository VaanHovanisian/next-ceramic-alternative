import { prisma } from "@/prisma/prisma-client";

export interface GetSearchParams {
  category: string;
  price: string;
  color: string;
  sort: string;
  page: string;
  limit?: string;
}

export const getFilterProducts = async (params: GetSearchParams) => {
  const category = params.category
    ? params.category.split(",").map(Number)
    : undefined;
  const color = params.color ? params.color.split(",").map(Number) : undefined;

  const frimId = params.price;
  const products = await prisma.products.findMany({
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
};
