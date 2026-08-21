import { Shop } from "@/components/shop";
import { getFilterProducts, GetSearchParams } from "@/lib/get-filter-products";
import { getFilterShop } from "@/lib/get-filter-shop";
import { Suspense } from "react";

interface SearchParamsProps {
  searchParams: Promise<GetSearchParams>;
}

async function ShopData({ searchParams }: SearchParamsProps) {
  const filter = await getFilterShop();
  const { products, count, page, totalPages } = await getFilterProducts(
    await searchParams,
    filter.priceRange,
  );
  return (
    <Shop
      count={count}
      page={page}
      totalPages={totalPages}
      products={products}
      filter={filter}
    />
  );
}

export default function ShopPage({ searchParams }: SearchParamsProps) {
  return (
    <Suspense>
      <ShopData searchParams={searchParams} />
    </Suspense>
  );
}
