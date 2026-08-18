"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useBasketStore } from "@/store/use-basket-store";

interface Props {
  className?: string;
}

export const BasketLink: React.FC<Props> = (props) => {
  const { className } = props;
  const quantity = useBasketStore((state) => state.quantity);
  return (
    <Link
      href="/basket"
      className={cn("relative hover:opacity-70 transition-opacity", className)}
    >
      <ShoppingCart size={18} />
      {quantity > 0 && (
        <span className="absolute top-3 left-2 flex items-center justify-center bg-black text-white leading-[130%] rounded-full text-[12px] w-4 h-4">
          {quantity}
        </span>
      )}
    </Link>
  );
};
