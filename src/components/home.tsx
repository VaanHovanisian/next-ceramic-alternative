import React from "react";
import { Catalog } from "./catalog";
import { cn } from "@/lib/utils";
import { Hero } from "./hero";
import { PlateServises } from "./plate-servises";
import { Post } from "./post";

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <Hero />
      <PlateServises />
      <Post />
      <Catalog />
    </div>
  );
};
