import React from "react";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";

interface Props {
  className?: string;
  item: any;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

export const BasketCart: React.FC<Props> = (props) => {
  const { className, item, removeItem } = props;

  return (
    <tr
      key={item.id}
      className={cn("bg-[#1a1a1a] text-white text-xs tracking-wider uppercase")}
    >
      <th className="p-3 text-center w-12">
        <Trash2 className="w-4 h-4 mx-auto cursor-pointer" />
      </th>
      <th className="p-3 uppercase text-xs font-semibold">Photo</th>
      <th className="p-3 uppercase text-xs font-semibold">Product</th>
      <th className="p-3 uppercase text-xs font-semibold">Price</th>
      <th className="p-3 uppercase text-xs font-semibold text-center">
        Quantity
      </th>
      <th className="p-3 uppercase text-xs font-semibold">Subtotal</th>
    </tr>
  );
};
