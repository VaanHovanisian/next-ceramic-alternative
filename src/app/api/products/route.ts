import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const limit = req.nextUrl.searchParams.get("limit");
    const search = req.nextUrl.searchParams.get("search") || "";

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
    console.log("Internal Server Error" + error);
    return NextResponse.json(
      { message: "Internal server Error" },
      { status: 500 },
    );
  }
}
