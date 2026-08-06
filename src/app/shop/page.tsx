import { Shop } from "@/components/shop";
import { getFilerShop } from "@/lib/get-filter-shop";
import { prisma } from "@/prisma/prisma-client";

export default async function ShopPage() {
  const products = await prisma.product.findMany();
  const filter = await getFilerShop();
  return <Shop products={products} filter={filter} />;
}
