"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { BasketCard } from "./basket-card";
import { BasketCartItems } from "@/constants/basket";
import { BasketTotal } from "./basket-total";

interface Props {
  className?: string;
}

export const Basket: React.FC<Props> = (props) => {
  const { className } = props;

  return (
<<<<<<< HEAD
    <div
      className={cn(
        "max-w-6xl mx-auto px-4 py-8 bg-white text-[#3a3845]",
        className,
      )}
    >
=======
    <div className={cn("", className)}>
>>>>>>> f33930fca7f59739fc28d47c43b7ab089b007a3a
      <div className="text-sm text-gray-400 mb-2">
        Home / <span className="text-gray-600">Shopping Cart</span>
      </div>
      <h1 className="text-2xl font-medium mb-6">
        Cart ({BasketCartItems.length} item)
      </h1>

      {BasketCartItems.length === 0 ? (
        <div className="text-center py-12 text-gray-500">Basket is empty:</div>
      ) : (
        <div className="flex flex-col gap-8 items-end">
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-left min-w-150">
              <thead>
                <tr className="bg-[#1a1a1a] text-white text-xs tracking-wider uppercase">
                  <th className="p-3 text-center w-12">
                    <Trash2 className="w-4 h-4 mx-auto cursor-pointer" />
                  </th>
                  <th className="p-3 uppercase text-xs font-semibold">Photo</th>
                  <th className="p-3 uppercase text-xs font-semibold">
                    Product
                  </th>
                  <th className="p-3 uppercase text-xs font-semibold">Price</th>
                  <th className="p-3 uppercase text-xs font-semibold text-center">
                    Quantity
                  </th>
                  <th className="p-3 uppercase text-xs font-semibold">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {BasketCartItems.map((item) => (
                  <BasketCard
                    key={item.id}
                    item={item}
                    removeItem={() => {}}
                    updateQuantity={() => {}}
                  />
                ))}
              </tbody>
            </table>
          </div>
<<<<<<< HEAD
          <BasketTotal totalAmount={1000} />
=======
          <BasketTotal
            totalAmount={1000}
          />
>>>>>>> f33930fca7f59739fc28d47c43b7ab089b007a3a
        </div>
      )}
    </div>
  );
};
