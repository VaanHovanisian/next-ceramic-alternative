import { Product } from "@/components/product";
import { PRODUCTS } from "@/constants/products";

interface ParamsProps {
  params: Promise<{ id: string }>;
}
export default async function ProductPage({ params }: ParamsProps) {
  const id = Number((await params).id);
  const product = PRODUCTS.find((el) => el.id === id);
  return <Product product={product} />;
}
