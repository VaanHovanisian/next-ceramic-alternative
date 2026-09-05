import { Home } from "@/components/home";
import { prisma } from "@/prisma/prisma-client";
import { unstable_cache } from "next/cache";

const cachedData = unstable_cache(
  async () => await prisma.product.findMany(),
  ["home"],
  { revalidate: 3600 },
);

export default async function HomePage() {
  const products = await cachedData();
  return <Home products={products} />;
}
