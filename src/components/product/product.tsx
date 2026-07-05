"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { ColorPicker } from "./color-picker";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import { ProductImage } from "./product-image";
import { Container } from "../container";

interface Props {
  className?: string;
  product: {
    id: number;
    name: string;
    price: number;
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
      <Container className="flex items-start ">
        <ProductImage
          alt="{product.name} imgUrl={product.imgUrl} images={product.images}"
          imgUrl={""}
          images={[]}
        />
      </Container>
    </div>
  );
};
