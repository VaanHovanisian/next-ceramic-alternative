import { findOrCreateBasket } from "@/lib/find-or-create-basket";
import { getUser } from "@/lib/get-user";
import { updateTotalAmountBasket } from "@/lib/update-total-amount-basket";
import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

const MAX_QUANTITY = 999;

export async function GET() {
  try {
    const userId = (await getUser())?.id;
    if (!userId) return NextResponse.json([], { status: 200 });
    const items = await updateTotalAmountBasket(userId);
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    console.error("Server Internal Error GET /api/basket", error);
    return NextResponse.json(
      { error: "Server Internal Error" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const userId = (await getUser())?.id;
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = (await req.json().catch(() => null)) as {
      productId?: unknown;
      quantity?: unknown;
    } | null;
    if (!body)
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

    const productId = Number(body.productId);
    const quantity = body.quantity === undefined ? 1 : Number(body.quantity);

    if (!Number.isInteger(productId) || productId <= 0)
      return NextResponse.json(
        { error: "productId must be a positive integer" },
        { status: 400 },
      );

    if (!Number.isInteger(quantity) || quantity <= 0 || quantity > MAX_QUANTITY)
      return NextResponse.json(
        { error: `quantity must be an integer between 1 and ${MAX_QUANTITY}` },
        { status: 400 },
      );

    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: { id: true },
    });
    if (!product)
      return NextResponse.json({ error: "Product not found" }, { status: 404 });

    const basket = await findOrCreateBasket(userId);
    await prisma.basketCard.upsert({
      where: {
        basketId_productId: { basketId: basket.id, productId },
      },
      create: { basketId: basket.id, productId, quantity },
      update: { quantity: { increment: quantity } },
    });

    const updateBasket = await updateTotalAmountBasket(userId);
    return NextResponse.json(updateBasket, { status: 200 });
  } catch (error) {
    console.error("Server Internal Error POST /api/basket", error);
    return NextResponse.json(
      { error: "Server Internal Error" },
      { status: 500 },
    );
  }
}

export async function DELETE() {
  try {
    const userId = (await getUser())?.id;
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const basket = await findOrCreateBasket(userId);
    await prisma.basketCard.deleteMany({ where: { basketId: basket.id } });

    const updateBasket = await updateTotalAmountBasket(userId);
    return NextResponse.json(updateBasket, { status: 200 });
  } catch (error) {
    console.error("Server Internal Error DELETE /api/basket", error);
    return NextResponse.json(
      { error: "Server Internal Error" },
      { status: 500 },
    );
  }
}
