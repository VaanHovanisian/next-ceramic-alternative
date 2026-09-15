import React from "react";
import { cn } from "@/lib/utils";
import { Category, Color, Product } from "@prisma/client";
import { AdminProductItem } from "./admin-product-item";
import { AdminProductProps } from "@/hooks/admin/admin-product";

interface Props {
  className?: string;
  data: (Product & { color: Color[] })[];
  categories: Category[];
  colors: Color[];
  admin: AdminProductProps;
}

export const AdminProductList: React.FC<Props> = ({
  className,
  data,
  admin,
  categories,
  colors,
}) => (
  <ul className={cn("grid gap-5", className)}>
    {data.map((el) => (
      <AdminProductItem
        key={el.id}
        el={el}
        admin={admin}
        categories={categories}
        colors={colors}
      />
    ))}
  </ul>
);
