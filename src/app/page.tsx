import { Home } from "@/components/home";
import { prisma } from "@/prisma/prisma-client";
import { Suspense } from "react";

export default async function HomePage() {
  const products = await prisma.product.findMany();
  return (
    <Suspense>
      <Home products={products} />
    </Suspense>
  );
}
