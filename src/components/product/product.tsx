"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import { ProductImage } from "./product-image";
import { Container } from "../container";
import { ProductContent } from "./product-content";
import { Catalog } from "../catalog";
import { Color, Product as ProductType } from "@prisma/client";
import { useBasket } from "@/hooks/use-basket";
import { toast } from "sonner";

interface Props {
  className?: string;
  popularItems: (ProductType & { color: Color[] })[];
  product: ProductType & { color: Color[] };
}

export const Product: React.FC<Props> = (props) => {
  const { className, product, popularItems } = props;
  const { addProduct } = useBasket();
  const [count, setCount] = React.useState(1);
  const [colorId, setColorId] = React.useState(product.color[0].id);

  const addToBasket = async () => {
    try {
      await addProduct({ productId: product.id, quantity: count, colorId });
    } catch (error) {
      console.error(error);
      toast.error("failed to basket");
    }
  };

  return (
    <>
      <Container
        className={cn("p-4 rounded-lg flex flex-col gap-4 ", className)}
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
        <div className="flex md:items-start items-center gap-15 flex-col md:flex-row">
          <ProductImage
            className="basis-1/2"
            alt={product.name}
            imgUrl={product.imgUrl}
            images={product.images}
          />
          <ProductContent
            className="basis-1/2"
            color={product.color}
            name={product.name}
            price={product.price}
            count={count}
            setCount={setCount}
            setActiveColor={setColorId}
            addToBasket={addToBasket}
          />
        </div>
      </Container>
      <Catalog
        className="text-start"
        items={popularItems}
        title="Similar Items"
      />
    </>
  );
};
