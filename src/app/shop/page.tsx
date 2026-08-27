import { Shop } from "@/components/shop";
<<<<<<< HEAD
import { prisma } from "@/prisma/prisma-client";

export default async function ShopPage() {
  const products = await prisma.product.findMany();
  return <Shop products={products} />;
=======
import { getFilterProducts, GetSearchParams } from "@/lib/get-filter-products";
import { getFilterShop } from "@/lib/get-filter-shop";
interface SearchParamsProps {
  searchParams: Promise<GetSearchParams>;
}

export default async function ShopPage({ searchParams }: SearchParamsProps) {
  const filter = await getFilterShop();
  const { products, count, page, totalPages } = await getFilterProducts(
    await searchParams,
    filter.priceRange,
  );
  return (
    // <Suspense>
    <Shop
      count={count}
      page={page}
      totalPages={totalPages}
      products={products}
      filter={filter}
    />
    // </Suspense>
  );
>>>>>>> Tagavor
}
