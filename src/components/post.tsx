import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
}

export const Post: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <div className="bg-[#F7F6F5]"></div>
      <div>
        <Image src={}></Image>
      </div>
    </div>
  );
};
