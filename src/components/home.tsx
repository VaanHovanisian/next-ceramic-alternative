import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { Hero } from "./hero";
import { PlateServices } from "./plate-services";
import { Post } from "./post";
import { Catalog } from "./catalog";
=======
import { Catalog } from "./catalog";
=======
>>>>>>> Tagavor
import { cn } from "@/lib/utils";
import { Hero } from "./hero";
import { PlateServices } from "./plate-services";
import { Post } from "./post";
<<<<<<< HEAD
>>>>>>> Tagavor
=======
import { Card } from "./card";
import { Header } from "./header";
>>>>>>> Tagavor

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <Header />
      <Hero />
<<<<<<< HEAD
<<<<<<< HEAD
      <PlateServices />
=======
      <PlateServises />
>>>>>>> Tagavor
=======
      <PlateServices />
>>>>>>> Tagavor
      <Post />
      <Card />
    </div>
  );
};
