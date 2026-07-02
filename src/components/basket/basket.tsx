"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { BasketCard } from "./basket-card";
import { BasketCartItems } from "@/constants/basket";
import { BasketTotal } from "./basket-total";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

interface Props {
  className?: string;
}

export const Basket: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={cn("", className)}>
      <Breadcrumb className="pt-5 pb-12.5">
        <BreadcrumbList className="flex">
          <BreadcrumbItem>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Shopping Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-2xl font-medium mb-6">
        Cart ({BasketCartItems.length} item)
      </h1>

      {BasketCartItems.length === 0 ? (
        <div className="text-center py-12 text-gray-500">Basket is empty:</div>
      ) : (
        <div className="flex flex-col  gap-8 items-end">
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
          <BasketTotal totalAmount={1000} />
        </div>
      )}
    </div>
  );
};
