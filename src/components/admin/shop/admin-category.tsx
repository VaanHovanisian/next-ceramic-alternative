"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useAdminCategory } from "@/hooks/admin/use-admin-category";

interface Props {
  className?: string;
  data: Category[];
}

export const AdminCategory: React.FC<Props> = (props) => {
  const { className, data } = props;

  const admin = useAdminCategory(data);

  return (
    <div className={cn("", className)}>
      <div className="flex gap-5 mb-5">
        <Input
          className="flex-1"
          value={admin.createInputValue}
          onChange={(e) => admin.setCreateInputValue(e.target.value)}
        />
        <Button disabled={admin.loading} onClick={admin.handleCreate}>
          create
        </Button>
      </div>
      <div className="flex items-center justify-between mb-5">
        <Label>
          <Checkbox
            checked={admin.isAllChecked}
            onCheckedChange={admin.handleAllChecked}
          />{" "}
          All
        </Label>
        <div className="flex gap-5">
          <Button
            onClick={admin.handleUpdate}
            variant={"secondary"}
            disabled={admin.checked.size === 0 || admin.loading}
          >
            update
          </Button>
          <Button variant={"destructive"} onClick={admin.handleDelete}>
            delete
          </Button>
        </div>
      </div>
      <ul className="grid gap-3">
        {data.map((el) => (
          <li className="flex w-fit gap-5 items-center " key={el.id}>
            <Checkbox
              checked={admin.checked.has(el.id)}
              onCheckedChange={() => admin.toggle(el.id)}
            />
            <Input
              aria-readonly={admin.checked.has(el.id)}
              onChange={(e) => {
                admin.setCategories((prev) => ({
                  ...prev,
                  [el.id]: e.target.value,
                }));
              }}
              value={admin.categories[el.id] ?? el.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
