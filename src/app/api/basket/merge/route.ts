import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/lib/get-user";
import { updateTotalAmountBasket } from "@/lib/update-total-amount-basket";
import { findOrCreateBasket } from "@/lib/find-or-create-basket";
import { basketMerge } from "@/lib/basket-merge";

export async function POST(req: NextRequest) {
  try {
    const userId = (await getUser())?.id;
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const localItems = (await req.json().catch(() => null)) as unknown;
    if (!Array.isArray(localItems))
      return NextResponse.json({ error: "array required" }, { status: 400 });

    const basket = await findOrCreateBasket(userId);
    await basketMerge(
      localItems as { id: number; quantity: number }[],
      basket.id,
    );
    const items = await updateTotalAmountBasket(userId);

    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    console.error("Server Internal Error POST /api/basket/merge", error);
    return NextResponse.json(
      { error: "Server Internal Error" },
      { status: 500 },
    );
  }
}
