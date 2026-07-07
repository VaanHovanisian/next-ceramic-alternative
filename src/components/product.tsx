import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ColorPicker } from "./product/color-picker";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from "./ui/breadcrumb";

interface Props {
  className?: string;
  product: {
    name: string;
    price: number;
    id: number;
    imgUrl: string;
    images: string[];
    color: Array<{ name: string }>;
  };
}

export const Product: React.FC<Props> = (props) => {
  const { className, product } = props;

  return (
    <div
      className={cn("border p-4 rounded-lg flex flex-col gap-4 ", className)}
    >
      <Breadcrumb className="pt-5 pb-12.5">
        <BreadcrumbList className="flex">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          /
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          /
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative w-133.75 h-146.25">
        <Image
          src={product.imgUrl}
          alt="{product.title}"
          fill
          className="object-cover rounded-md"
          sizes="300px"
        />
      </div>

      <>
        <h2 className="text-xl font-semibold">{product.name}</h2>

        <p className="text-lg font-medium">{product.price}</p>

        <ColorPicker />

        <button className="bg-black text-white py-2 rounded-md hover:opacity-90">
          Add To Cart
        </button>
      </>
    </div>
  );
};
