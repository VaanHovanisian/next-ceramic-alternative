import React from "react";
import { cn } from "@/lib/utils";
import { Filter } from "../filter/";
import { Catalog } from "../catalog";
import { PRODUCTS } from "@/constants/products";
import { Container } from "../container";

interface Props {
  className?: string;
}

export const Shop: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <Container className={cn("flex", className)}>
      <Filter />
      <Catalog className="grow" items={PRODUCTS} />
    </Container>
  );
};
