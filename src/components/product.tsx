import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ColorPicker } from "./product/color-picker";

interface Props {
  className?: string;
  product: {
    title: string;
    price: number;
    img: string;
  };
}

export const Product: React.FC<Props> = (props) => {
  const { className, product } = props;

  return (
    <div
      className={cn("border p-4 rounded-lg flex flex-col gap-4 ", className)}
    >
      <div className="relative w-133.75 h-146.25">
        <Image
          src={product.img}
          alt="{product.title}"
          fill
          className="object-cover rounded-md"
          sizes="300px"
        />
      </div>

      <>
        <h2 className="text-xl font-semibold">{product.title}</h2>

        <p className="text-lg font-medium">{product.price}</p>

        <ColorPicker />

        <button className="bg-black text-white py-2 rounded-md hover:opacity-90">
          Add To Cart
        </button>
      </>
    </div>
  );
};
