import { findOrCreateBasket } from "@/lib/find-or-create-basket";
import { getUser } from "@/lib/get-user";
import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { PageProps } from "@/@types/params";
import { updateTotalAmountBasket } from "@/lib/update-total-amount-basket";

export async function DELETE(_: NextRequest, { params }: PageProps) {
  try {
    const userId = (await getUser())?.id;
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const productId = Number((await params).id);
    if (!Number.isInteger(productId) || productId <= 0)
      return NextResponse.json(
        { error: "productId must be a positive integer" },
        { status: 400 },
      );

    const basket = await findOrCreateBasket(userId);
    await prisma.basketCard.deleteMany({
      where: { basketId: basket.id, productId },
    });

    const items = await updateTotalAmountBasket(userId);
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    console.error("Server Internal Error DELETE /api/basket/[id]", error);
    return NextResponse.json(
      { error: "Server Internal Error" },
      { status: 500 },
    );
  }
}

export async function PATCH(req: NextRequest, { params }: PageProps) {
  try {
    const userId = (await getUser())?.id;
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const productId = Number((await params).id);
    if (!Number.isInteger(productId) || productId <= 0)
      return NextResponse.json(
        { error: "productId must be a positive integer" },
        { status: 400 },
      );

    const body = (await req.json().catch(() => null)) as {
      type?: unknown;
    } | null;
    const type = body?.type;
    if (type !== "increment" && type !== "decrement")
      return NextResponse.json(
        { error: 'type must be "increment" or "decrement"' },
        { status: 400 },
      );

    const basket = await findOrCreateBasket(userId);
    const existing = await prisma.basketCard.findUnique({
      where: {
        basketId_productId: { basketId: basket.id, productId },
      },
    });
    if (!existing)
      return NextResponse.json(
        { error: "Item not in basket" },
        { status: 404 },
      );

    const next =
      type === "increment"
        ? existing.quantity + 1
        : Math.max(1, existing.quantity - 1);

    if (next !== existing.quantity) {
      await prisma.basketCard.update({
        where: { id: existing.id },
        data: { quantity: next },
      });
    }

    const items = await updateTotalAmountBasket(userId);
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    console.error("Server Internal Error PATCH /api/basket/[id]", error);
    return NextResponse.json(
      { error: "Server Internal Error" },
      { status: 500 },
    );
  }
}
