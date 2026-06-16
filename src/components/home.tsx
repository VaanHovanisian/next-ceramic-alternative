import React from "react";
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { Hero } from "./hero";
import { PlateServices } from "./plate-services";
import { Post } from "./post";
import { Catalog } from "./catalog";
=======
import { Catalog } from "./catalog";
import { cn } from "@/lib/utils";
import { Hero } from "./hero";
import { PlateServises } from "./plate-servises";
import { Post } from "./post";
>>>>>>> Tagavor

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <Hero />
<<<<<<< HEAD
      <PlateServices />
=======
      <PlateServises />
>>>>>>> Tagavor
      <Post />
      <Catalog />
    </div>
  );
};
