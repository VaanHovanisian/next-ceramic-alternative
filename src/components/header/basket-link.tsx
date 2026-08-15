"use client";

import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { useBasketStore } from "@/store/use-basket-store";

export const BasketLink = () => {
  const quantity = useBasketStore((state) => state.quantity);

  return (
    <Link href="/basket" className="relative">
      <ShoppingBasket className="w-5 h-5" />

      {quantity > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs text-white">
          {quantity}
        </span>
      )}
    </Link>
  );
};
