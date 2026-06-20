import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

<<<<<<<< HEAD:src/app/basket/page.tsx
export const Page: React.FC<Props> = (props) => {
========
export const Contact: React.FC<Props> = (props) => {
>>>>>>>> Tagavor:src/components/contact.tsx
  const { className } = props;
  return <div className={cn("", className)}></div>;
};
