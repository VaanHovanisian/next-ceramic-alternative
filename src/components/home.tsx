import React from "react";
import { cn } from "@/lib/utils";
import { Hero } from "./hero";
import { PlateServices } from "./plate-services";
import { Post } from "./post";
import { Catalog } from "./catalog";

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
