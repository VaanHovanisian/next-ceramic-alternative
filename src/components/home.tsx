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
      <Hero color="#826f26" desctopImgUrl="/hero.jpg" mobileImgUrl="">
        <p>Handcrafted in Viet Nam since 1650</p>
      </Hero>
      <PlateServices />
      <Post />
      <Catalog />
    </div>
  );
};
