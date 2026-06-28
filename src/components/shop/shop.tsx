import React from "react";
import { cn } from "@/lib/utils";
import { Filter } from "../filter/filter";
import { Catalog } from "../catalog";
import { PRODUCTS } from "@/constants/products";

interface Props {
  className?: string;
}

export const Shop: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <Filter />
      <Catalog className="grow" items={PRODUCTS} />
    </div>
  );
};
