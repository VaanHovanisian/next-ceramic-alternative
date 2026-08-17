import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });
  const userId = session?.user?.id;
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const localItems = (await req.json()) as { id: number; quantity: number }[];
  if (!Array.isArray(localItems))
    return NextResponse.json({ error: "array required" }, { status: 400 });

  const basket = await prisma.basket.upsert({
    where: { userId },
    update: {},
    create: { userId },
  });

  const cleanItems = localItems.filter(
    (i) => Number.isFinite(i.id) && i.quantity > 0,
  );

  if (cleanItems.length > 0) {
    const productIds = cleanItems.map((i) => i.id);
    const existingProducts = await prisma.product.findMany({
      where: { id: { in: productIds } },
      select: { id: true },
    });
    const validIds = new Set(existingProducts.map((p) => p.id));

    const existingCards = await prisma.basketCard.findMany({
      where: { basketId: basket.id, productId: { in: productIds } },
    });
    const byProduct = new Map(existingCards.map((c) => [c.productId, c]));

    for (const item of cleanItems) {
      if (!validIds.has(item.id)) continue;
      const existing = byProduct.get(item.id);
      if (existing) {
        await prisma.basketCard.update({
          where: { id: existing.id },
          data: { quantity: existing.quantity + item.quantity },
        });
      } else {
        await prisma.basketCard.create({
          data: {
            basketId: basket.id,
            productId: item.id,
            quantity: item.quantity,
          },
        });
      }
    }
  }

  const cards = await prisma.basketCard.findMany({
    where: { basketId: basket.id },
    include: { product: true },
    orderBy: { createdAt: "asc" },
  });
  return NextResponse.json(
    cards.map((c) => ({ ...c.product, quantity: c.quantity })),
    { status: 200 },
  );
}
