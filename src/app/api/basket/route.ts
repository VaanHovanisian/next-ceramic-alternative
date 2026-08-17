import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() });
  return session?.user?.id ?? null;
}

async function getOrCreateBasket(userId: string) {
  return prisma.basket.upsert({
    where: { userId },
    update: {},
    create: { userId },
  });
}

async function loadBasketItems(userId: string) {
  const basket = await getOrCreateBasket(userId);
  const cards = await prisma.basketCard.findMany({
    where: { basketId: basket.id },
    include: { product: true },
    orderBy: { createdAt: "asc" },
  });
  return cards.map((c) => ({ ...c.product, quantity: c.quantity }));
}

export async function GET(req: NextRequest) {
  const idsParam = req.nextUrl.searchParams.get("ids");

  if (idsParam !== null) {
    const ids = idsParam
      .split(",")
      .map(Number)
      .filter((n) => Number.isFinite(n));
    if (ids.length === 0) return NextResponse.json([], { status: 200 });
    const products = await prisma.product.findMany({
      where: { id: { in: ids } },
    });
    return NextResponse.json(products, { status: 200 });
  }

  const userId = await getUserId();
  if (!userId) return NextResponse.json([], { status: 200 });
  const items = await loadBasketItems(userId);
  return NextResponse.json(items, { status: 200 });
}

export async function POST(req: NextRequest) {
  const userId = await getUserId();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { productId, quantity = 1 } = (await req.json()) as {
    productId: number;
    quantity?: number;
  };
  if (!productId)
    return NextResponse.json(
      { error: "productId required" },
      { status: 400 },
    );

  const basket = await getOrCreateBasket(userId);
  const existing = await prisma.basketCard.findFirst({
    where: { basketId: basket.id, productId },
  });
  if (existing) {
    await prisma.basketCard.update({
      where: { id: existing.id },
      data: { quantity: existing.quantity + quantity },
    });
  } else {
    await prisma.basketCard.create({
      data: { basketId: basket.id, productId, quantity },
    });
  }

  const items = await loadBasketItems(userId);
  return NextResponse.json(items, { status: 200 });
}

export async function PATCH(req: NextRequest) {
  const userId = await getUserId();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { productId, type } = (await req.json()) as {
    productId: number;
    type: "increment" | "decrement";
  };
  if (!productId || !type)
    return NextResponse.json(
      { error: "productId and type required" },
      { status: 400 },
    );

  const basket = await getOrCreateBasket(userId);
  const existing = await prisma.basketCard.findFirst({
    where: { basketId: basket.id, productId },
  });
  if (existing) {
    const next =
      type === "increment"
        ? existing.quantity + 1
        : Math.max(1, existing.quantity - 1);
    await prisma.basketCard.update({
      where: { id: existing.id },
      data: { quantity: next },
    });
  }

  const items = await loadBasketItems(userId);
  return NextResponse.json(items, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const userId = await getUserId();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const productIdParam = req.nextUrl.searchParams.get("productId");
  const basket = await getOrCreateBasket(userId);

  if (productIdParam) {
    const productId = Number(productIdParam);
    if (Number.isFinite(productId)) {
      await prisma.basketCard.deleteMany({
        where: { basketId: basket.id, productId },
      });
    }
  } else {
    await prisma.basketCard.deleteMany({ where: { basketId: basket.id } });
  }

  const items = await loadBasketItems(userId);
  return NextResponse.json(items, { status: 200 });
}
