import React from "react";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";

interface Props {
  className?: string;
  data: Product[];
}

export const AdminProduct: React.FC<Props> = (props) => {
  const { className } = props;
  return <div className={cn("", className)}>product</div>;
};
