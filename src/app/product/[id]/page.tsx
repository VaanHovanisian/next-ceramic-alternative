import { Product } from "@/components/product/product";
import { prisma } from "@/prisma/prisma-client";
import { unstable_cache } from "next/cache";
import { Suspense } from "react";

interface ParamsProps {
  params: Promise<{ id: string }>;
}

async function ProductData({ params }: ParamsProps) {
  const id = Number((await params).id);
  const items = await unstable_cache(
    async () =>
      await Promise.all([
        prisma.product.findUnique({
          where: { id },
          include: {
            color: true,
          },
        }),
        prisma.product.findMany({
          take: 4,
          include: { color: true },
        }),
      ]),
  )();

  if (!items[0]) {
    return null;
  }

  return <Product product={items[0]} popularItems={items[1]} />;
}

export default function ProductPage({ params }: ParamsProps) {
  return (
    <Suspense>
      <ProductData params={params} />
    </Suspense>
  );
}
