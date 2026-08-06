import { Shop } from "@/components/shop";
import { prisma } from "@/prisma/prisma-client";

export default async function ShopPage() {
  const products = await prisma.product.findMany();
  return <Shop products={products} />;
}
