import { Home } from "@/components/home";
import { prisma } from "@/prisma/prisma-client";

export default async function HomePage() {
  const products = await prisma.product.findMany();
  return <Home products={products} />;
}
