import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  product: any;
}

export const Product: React.FC<Props> = (props) => {
  const { className } = props;
  return <div className={cn("", className)}>{product.title}</div>;
};
