import { Shop } from "@/components/shop";
import { getFilterProducts, GetSearchParams } from "@/lib/get-filter-products";
import { getFilterShop } from "@/lib/get-filter-shop";
import { prisma } from "@/prisma/prisma-client";

interface SearchParamsProps {
  searchParams: Promise<GetSearchParams>;
}

export default async function ShopPage() {
  const products = await getFilterProducts(await searchParams filter.priceRange);
  const filter = await getFilterShop();
  return <Shop products={products} filter={filter} />;
}
