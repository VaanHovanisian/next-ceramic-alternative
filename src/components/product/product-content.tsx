import React from "react";
import { cn } from "@/lib/utils";
import { ColorPicker } from "./color-picker";
import { Product } from "./product";
import { Button } from "../ui/button";

interface Props {
  className?: string;
  name: string;
  price: string;
  color: Array<{ name: string }>;
}

export const ProductContent: React.FC<Props> = (props) => {
  const { className, color, name, price } = props;

  return (
    <div className={cn("", className)}>
      <div className="basis-1/2">
        <h2 className="text-xl font-semibold">{name}</h2>

        <span className="text-lg font-medium">{price}</span>

        <ColorPicker color={color} />

        <Button>Add To Cart</Button>
      </div>
    </div>
  );
};
