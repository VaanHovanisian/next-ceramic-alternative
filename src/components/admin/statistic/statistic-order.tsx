import React from "react";
import { cn } from "@/lib/utils";
import { Order } from "@prisma/client";

interface Props {
  className?: string;
  data: Order[];
}

export const StatisticOrder: React.FC<Props> = (props) => {
  const { className, data } = props;
  return <div className={cn("", className)}></div>;
};
