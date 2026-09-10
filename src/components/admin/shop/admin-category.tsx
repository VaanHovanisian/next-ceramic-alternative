import React from "react";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";

interface Props {
  className?: string;
  data: Category[];
}

export const AdminCategory: React.FC<Props> = (props) => {
  const { className } = props;
  return <div className={cn("", className)}>category</div>;
};
