import { Shop } from "@/components/shop";
import { getFilterProducts, GetSearchParams } from "@/lib/get-filter-products";
import { getFilterShop } from "@/lib/get-filter-shop";
import { Suspense } from "react";
interface SearchParamsProps {
  searchParams: Promise<GetSearchParams>;
}

export default async function ShopPage({ searchParams }: SearchParamsProps) {
  const filter = await getFilterShop();
  const products = await getFilterProducts(
    await searchParams,
    filter.priceRange,
  );
  return (
    <Suspense>
      <Shop products={products} filter={filter} />
    </Suspense>
  );
}
