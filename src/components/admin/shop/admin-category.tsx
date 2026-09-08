import React from "react";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Props {
  className?: string;
  data: Category[];
}

export const AdminCategory: React.FC<Props> = (props) => {
  const { className, data } = props;
  return (
    <div className={cn("", className)}>
      <div className="flex gap-5 mb-5 ">
        <Input className="flex-1" />
        <Button>create</Button>
      </div>
      <div className="flex items-center justify-between mb-5">
        <Label>
          <Checkbox /> All
        </Label>
        <div className="flex gap-5">
          <Button variant={"secondary"}>update</Button>
          <Button variant={"destructive"}>delete</Button>
        </div>
      </div>
      <ul className="grid gap-3">
        {data.map((el) => (
          <li className="flex w-fit gap-5 items-center" key={el.id}>
            <Checkbox />
            <Input value={el.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
