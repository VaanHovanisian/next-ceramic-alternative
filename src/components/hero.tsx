import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

interface Props {
  className?: string;
  imageSrc?: string;
  title?: string;
  text?: string;
  color?: string;
}

export const Hero: React.FC<Props> = (props) => {
  const { className, imageSrc, title, text, color } = props;
  return (
    <section className={cn("grid min-h-screen", className)}>
      {/* <Image
        src={imageSrc || "/hero.jpg"}
        alt={title || "BAT TRANG"}
        fill
        className="object-cover h-full w-full"
      /> */}

      <div className="bg-[#8B7A74] flex flex-col  items-center justify-center text-center text-white px-8">
        <p className="mb-4 text-sm">Handcrafted in Vietnam since 1650</p>

        <h1 className="mb-8 text-5xl font-semibold leading-tight">
          {title || "BAT TRANG"}
          <br />
          {text || "DINNER SET"}
        </h1>

        <Button className="bg-white px-8 py-3 text-black cursor-pointer hover:bg-[#A67C52] hover:text-white transition-colors duration-300">
          SHOP NOW
        </Button>
      </div>
    </section>
  );
};
