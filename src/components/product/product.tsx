import React from "react";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import { ProductImage } from "./product-image";
import { Container } from "../container";
import { ProductContent } from "./product-content";

interface Props {
  className?: string;
  product: {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    images: string[];
    color: Array<{ name: string; id: number }>;
  };
}

export const Product: React.FC<Props> = (props) => {
  const { className, product } = props;

  return (
    <Container
      className={cn("border p-4 rounded-lg flex flex-col gap-4 ", className)}
    >
      <Breadcrumb className="pt-5 pb-12.5">
        <BreadcrumbList className="flex">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          /
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          /
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-start gap-15 ">
        <ProductImage
          className="basis-1/2"
          imgUrl={product.imgUrl}
          alt={product.name}
          images={product.images}
        />
        <ProductContent
          className="basis-1/2"
          name={product.name}
          price={product.price}
          color={product.color}
        />
      </div>
    </Container>
  );
};
