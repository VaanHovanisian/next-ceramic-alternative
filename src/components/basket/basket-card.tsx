/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";

interface Props {
  className?: string;
  item: any;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

export const BasketCard: React.FC<Props> = (props) => {
  const { className, item, removeItem, updateQuantity } = props;
  return (
    <tr
      key={item.id}
      className={cn(
        "border-b text-primary border-gray-200 align-middle",
        className,
      )}
    >
      <td className="p-4 text-center">
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-400 hover:text-red-600 transition"
        >
          <X className="w-5 h-5 mx-auto" />
        </button>
      </td>

      <td className="p-4">
        <div className="w-16 h-20 rounded overflow-hidden flex items-center justify-center">
          <Image
            src={item.img}
            alt={item.title}
            width={120}
            height={141}
            className="object-cover w-full h-full"
          />
        </div>
      </td>

      <td className="p-4 font-semibold text-[14px] tracking-wide max-w-50">
        {item.title}
      </td>

      <td className="p-4 font-semibold text-[14px] tracking-wide max-w-50">
        ${item.price}
      </td>

      <td className="p-4">
        <div className="flex items-center justify-center border border-gray-300 rounded w-24 mx-auto h-8 bg-white">
          <button
            onClick={() => updateQuantity(item.id, -1)}
            className="px-2 text-gray-500 hover:text-black"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="p-4 font-semibold text-[14px] tracking-wide max-w-50">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="px-2 text-gray-500 hover:text-black"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </td>

      <td className="p-4 text-sm font-semibold #c69b7b">
        ${item.price * item.quantity}
      </td>
    </tr>
  );
};
