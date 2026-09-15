
import React from "react";
import { cn } from "@/lib/utils";
import { PriceRange } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { use, useAdminPriceRange } from "@/hooks/admin/us-price-range";

interface Props {
  className?: string;
  data: PriceRange[];
}

export const AdminPrice: React.FC<Props> = (props) => {
  const { className, data } = props;

  
  const admin = useAdminPriceRange(data);

  return (
    <div className={cn("", className)}>
      <div className="flex gap-5 mb-5">
        <div className="flex flex-1">
          <Label htmlFor="newFrom">From</Label>
          <Input
            id="newFrom"
            type={"number"}
            className="flex-1"
            value={admin.newFrom} // 2. Ուղղվել է՝ newFrom -> admin.newFrom
            onChange={(e) => admin.setNewFrom(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="newTo">To</Label>
          <Input
            id="newTo"
            type={"number"}
            className="flex-1"
            value={admin.newTo} // 3. Ուղղվել է՝ newTo -> admin.newTo
            onChange={(e) => admin.setNewTo(e.target.value)}
          />
        </div>
        <Button disabled={admin.loading} onClick={admin.handleCreate}>
          create
        </Button>
      </div>
      <div className="flex items-center justify-between mb-5">
        <Label>
          <Checkbox
            checked={admin.isAllChecked}
            onCheckedChange={admin.handleAllChecked}
          />
          All
        </Label>
        <div className="flex gap-5">
          <Button
            onClick={admin.handleUpdate}
            disabled={admin.checked.size === 0 || admin.loading}
            variant={"secondary"}
          >
            update
          </Button>
          <Button
            onClick={admin.handleDelete}
            disabled={admin.checked.size === 0 || admin.loading}
            variant={"destructive"}
          >
            delete
          </Button>
        </div>
      </div>
      <ul className="grid gap-3">
        {data.map((el) => (
          <li className="flex  gap-5 items-center" key={el.id}>
            <Checkbox
            className="w-5 h-5"
              onCheckedChange={() => admin.toggle(el.id)}
              checked={admin.checked.has(el.id)}
            />
            
            <Input
              className="min-w-100"
              type={"number"}
              readOnly={!admin.checked.has(el.id)}
              onChange={(e) => {
                admin.setRanges((prev) => ({
                  ...prev,
                  [el.id]: {
                    from: e.target.value,
                    to: prev[el.id]?.to ?? el.to, // 5. el.to-ն պետք է լինի string
                  },
                }));
              }}
              value={admin.ranges[el.id]?.from ?? el.from} // 6. el.name -> el.from
            />
            {դաշտի համար */}
            <Input
              className="min-w-100"
              type={"number"}
              readOnly={!admin.checked.has(el.id)}
              onChange={(e) => {
                admin.setRanges((prev) => ({
                  ...prev,
                  [el.id]: {
                    from: prev[el.id]?.from ?? el.from,
                    to: e.target.value,
                  },
                }));
              }}
              value={admin.ranges[el.id]?.to ?? el.to}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
