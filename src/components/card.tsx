/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
  product: any;
}

export const Card: React.FC<Props> = (props) => {
  const { className, product } = props;

  return (
    <div className={cn("", className)}>
      <div>
        <Link href={"/product/" + product.id} className="w-full h-64 overflow-hidden rounded-xl">
          <Image
            src={product.img}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            width={255}
            height={325}
          />
        </Link>
        <h3 className="mt-4 flex flex-col gap-1 text-center text-base font-medium text-[#3a3845]">
          {product.title}
          <span className="text-lg font-semibold mt-1">{product.price}</span>
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-center line-clamp-3">
          Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.
        </p>
      </div>

      <Button className="w-full mt-5">Add to cart</Button>
    </div>
  );
};
