import React from "react";
import { cn } from "@/lib/utils";
import { PriceRange } from "@prisma/client";

interface Props {
  className?: string;
  data: PriceRange[];
}

export const AdminPrice: React.FC<Props> = (props) => {
  const { className } = props;
  return <div className={cn("", className)}>priceRange</div>;
};
