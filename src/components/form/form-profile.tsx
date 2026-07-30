import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const FormProfile: React.FC<Props> = (props) => {
  const { className } = props;
  return <form className={cn("", className)}></form>;
};
