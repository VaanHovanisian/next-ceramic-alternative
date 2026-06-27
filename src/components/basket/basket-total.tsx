import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
}

export const BasketTotal: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <div className="w-full lg:w-1/4 bg-[#fcfcfc] border border-gray-100 p-6 rounded-sm shadow-sm self-end lg:self-start">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
          <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
            Cart totals
          </span>
          <span className="text-lg font-semibold">
            ${totalAmount.toFixed(2)}
          </span>
        </div>

        <Link
          href={"/checkout"}
          className="w-full bg-[#1a1a1a] text-white text-xs uppercase tracking-widest py-3 font-medium hover:bg-black transition-colors rounded-none"
        >
          Proceed to checkout
        </Link>
      </div>
      ;
    </div>
  );
};
