import { prisma } from "@/prisma/prisma-client";

const MAX_MERGE_ITEMS = 100;
const MAX_QUANTITY = 999;

export const basketMerge = async (
  localItems: { id: number; quantity: number }[],
  basketId: number,
) => {
  const clean = localItems
    .filter(
      (i) =>
        Number.isInteger(i.id) &&
        i.id > 0 &&
        Number.isInteger(i.quantity) &&
        i.quantity > 0 &&
        i.quantity <= MAX_QUANTITY,
    )
    .slice(0, MAX_MERGE_ITEMS);

  if (clean.length === 0) return;

  const productIds = clean.map((i) => i.id);
  const existingProducts = await prisma.product.findMany({
    where: { id: { in: productIds } },
    select: { id: true },
  });
  const validIds = new Set(existingProducts.map((p) => p.id));
  const items = clean.filter((i) => validIds.has(i.id));
  if (items.length === 0) return;

  await prisma.$transaction(
    items.map((item) =>
      prisma.basketCard.upsert({
        where: {
          basketId_productId: { basketId, productId: item.id },
        },
        create: {
          basketId,
          productId: item.id,
          quantity: item.quantity,
        },
        update: {
          quantity: { increment: item.quantity },
        },
      }),
    ),
  );
};
