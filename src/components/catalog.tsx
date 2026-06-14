import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "./card";

interface Props {
  className?: string;
}

export const Catalog: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={cn("", className)}>
      <Card />
    </div>
  );
};
