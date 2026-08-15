"use cache";
import { Home } from "@/components/home";
import { prisma } from "@/prisma/prisma-client";
import { cacheLife, cacheTag } from "next/cache";
import { Suspense } from "react";

export default async function HomePage() {
  cacheLife("weeks");
  cacheTag("home");
  const products = await prisma.product.findMany();
  return (
    <Suspense>
      <Home products={products} />
    </Suspense>
  );
}
