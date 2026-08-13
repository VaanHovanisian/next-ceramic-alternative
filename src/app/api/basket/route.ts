import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const ids = req.nextUrl.searchParams.get("ids")?.split(",").map(Number);

  if (!ids) {
    return NextResponse.json([], { status: 200 });
  }

  const products = await prisma.product.findMany({
    where: {
      id: { in: ids },
    },
  });

  return NextResponse.json(products, { status: 200 });
}
