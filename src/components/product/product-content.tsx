import React from "react";
import { cn } from "@/lib/utils";
import { ColorPicker } from "./color-picker";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { Color } from "@prisma/client";

interface Props {
  className?: string;
  name: string;
  price: number;
  color: Array<Color>;
  count: number;
  setCount: (count: number) => void;
  setActiveColor: (color: number) => void;
  addToBasket: () => Promise<void>;
}

export const ProductContent: React.FC<Props> = (props) => {
  const {
    className,
    color,
    name,
    price,
    count,
    setCount,
    setActiveColor,
    addToBasket,
  } = props;
  return (
    <div className={cn("grid", className)}>
      <h2 className="text-xl font-semibold leading-[140%] tracking-[0.06em] uppercase mb-12.5">
        {name}
      </h2>
      <span className="text-2xl leading-[133%] tracking-[0.06em] uppercase mb-12">
        $ {price}
      </span>
      <ColorPicker
        className="mb-12"
        color={color}
        setActiveColor={setActiveColor}
      />
      <div className="flex gap-2.5">
        <div className="flex gap-10 items-center border border-primary p-5 text-primary">
          <button
            onClick={() => setCount(count <= 1 ? 1 : count - 1)}
            className="cursor-pointer"
          >
            <Minus />
          </button>
          <span className="font-semibold text-[14px] leading-[143%] tracking-[0.06em] uppercase">
            {count}
          </span>
          <button
            onClick={() => setCount(count + 1)}
            className="cursor-pointer"
          >
            <Plus />
          </button>
        </div>
        <Button onClick={addToBasket} className="flex-1" variant={"secondary"}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
};
