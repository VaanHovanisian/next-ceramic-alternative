import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Contact: React.FC<Props> = (props) => {
  const { className } = props;
  return <div className={cn("", className)}></div>;
};
