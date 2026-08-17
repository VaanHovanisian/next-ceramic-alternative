import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

const MAX_IDS = 200;

export async function GET(req: NextRequest) {
  try {
    const idsParam = req.nextUrl.searchParams.get("ids");

    if (idsParam !== null) {
      const ids = Array.from(
        new Set(
          idsParam
            .split(",")
            .map(Number)
            .filter((n) => Number.isInteger(n) && n > 0),
        ),
      ).slice(0, MAX_IDS);
      if (ids.length === 0) return NextResponse.json([], { status: 200 });
      const products = await prisma.product.findMany({
        where: { id: { in: ids } },
      });
      return NextResponse.json(products, { status: 200 });
    }

    const limit = req.nextUrl.searchParams.get("limit");
    const search = req.nextUrl.searchParams.get("search") || " ";
    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
      take: Number(limit),
    });
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Internal Server Error GET /api/products", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
