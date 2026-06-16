import React from "react";
import { Catalog } from "./catalog";
import { cn } from "@/lib/utils";
import { Hero } from "./hero";
import { Post } from "./post";
import { PlateServices } from "./plate-services";

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <Hero />
      <PlateServices />
      <Post />
      <Catalog />
    </div>
  );
};
