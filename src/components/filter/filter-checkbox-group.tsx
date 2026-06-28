"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Title } from "../title";
import { FilterCheckbox } from "./filter-checkbox";

interface Props {
  className?: string;
  title: string;
  items: any[];
  isColor?: boolean;
}

export const FilterCheckboxGroup: React.FC<Props> = ({
  className,
  title,
  items,
  isColor,
}) => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleChecked = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className={cn("", className)}>
      <Title size="s">{title}</Title>

      <ul>
        {items.map((el) => (
          <li key={el.id}>
            <FilterCheckbox
              checked={checkedItems.includes(el.id)}
              label={el.name}
              setChecked={() => toggleChecked(el.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
