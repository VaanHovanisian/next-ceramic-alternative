import { Home } from "@/components/home";
import { prisma } from "@/prisma/prisma-client";
import { unstable_cache } from "next/cache";

export default async function HomePage() {
  const products = await unstable_cache(
    async () =>
      await prisma.product.findMany({
        include: { color: true },
      }),
    ["home"],
    { revalidate: 3600, tags: ["home"] },
  )();
  return <Home products={products} />;
}
