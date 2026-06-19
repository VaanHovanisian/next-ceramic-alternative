import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import type { BasketProduct } from "@/@types/products";
import { useBasket } from "@/hooks/use-basket";

interface Props {
  className?: string;
  product: BasketProduct;
}

export const BasketCard: React.FC<Props> = (props) => {
  const { className, product } = props;
  const { deleteProduct } = useBasket();

  return (
    <article
      className={cn(
        "flex items-center gap-5 p-5 rounded-[20px] border border-[#F3F3F3]",
        className,
      )}
    >
      <img src={product.imageUrl} alt={product.title} width={70} height={70} />

      <div className="grid gap-2">
        <h3 className="text-[14px]">{product.title}</h3>

        <span className="text-[14px] font-bold">{product.price}</span>
      </div>

      <button
        onClick={() => deleteProduct(product.id)}
        className="p-2 border border-[#bebebe] rounded-[8px] cursor-pointer"
      >
        <X width={11} height={11} />
      </button>
    </article>
  );
};
