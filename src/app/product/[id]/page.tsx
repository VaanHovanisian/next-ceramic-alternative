import { Suspense } from "react";
import { Product } from "@/components/product/product";
import { productIdes } from "@/constants/products";

interface ParamsProps {
  params: Promise<{ id: string }>;
}

async function ProductContent({ params }: ParamsProps) {
  const { id } = await params;

  const product = productIdes.find((el) => el.id === Number(id));

  if (!product) {
    return null;
  }

  return <Product product={product} />;
}

export default function ProductPage({ params }: ParamsProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductContent params={params} />
    </Suspense>
  );
}
