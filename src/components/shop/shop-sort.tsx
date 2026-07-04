"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface Props {
  className?: string;
}

const sort = [
  {
    name: "Name asc",
    value: "name_asc",
  },
  {
    name: "Name desc",
    value: "name_desc",
  },
  {
    name: "Price asc",
    value: "price_asc",
  },
  {
    name: "Price desc",
    value: "price_desc",
  },
  {
    name: "Newest",
    value: "newest",
  },
];

export const ShopSort: React.FC<Props> = (props) => {
  const { className } = props;
  const [open, setOpen] = React.useState(false);

  const ref = React.useRef(null);

  React.useEffect(() => {
    const handleClick = () => {
      if (ref.current) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        className="flex gap-5 items-center"
        onClick={() => setOpen(!open)}
      >
        Sort by: <span>Name</span> <ChevronDown />
      </button>
      <ul
        className={cn(
          "absolute top-full w-full p-2 rounded-[4px] bg-white z-50 scale-y-0 origin-top transition-[scale] duration-500",
          {
            "scale-y-100": open,
          },
        )}
      >
        {sort.map((el, i) => (
          <li key={i}>
            <button className="cursor-pointer w-full hover:bg-accent text-start">
              {el.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};