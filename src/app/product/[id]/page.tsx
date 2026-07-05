import { Product } from "@/components/product/product";
import { productIdes } from "@/constants/products";

interface ParamsProps {
  params: Promise<{ id: string }>;
}
export default async function ProductPage({ params }: ParamsProps) {
  const id = Number((await params).id);
  const product = productIdes.find((el) => el.id === id);

  if (!product) {
    return null;
  }
  return <Product product={product} />;
}
