"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "../title";
import { FilterCheckboxGroup } from "./filter-checkbox-group";
import { useFilter } from "@/hooks/filter/use-filter";
import { useFilterQuery } from "@/hooks/filter/use-filter-query";

interface FilterItem {
  id: string;
  name: string;
}

interface PriceRange {
  id: string;
  from: number;
  to?: number | null;
}

interface FilterData {
  category: FilterItem[];
  priceRange: PriceRange[];
  color: FilterItem[];
}

interface Props {
  className?: string;
  filter: FilterData;
}

export const Filter: React.FC<Props> = ({ className, filter: filterArr }) => {
  const filter = useFilter();

  useFilterQuery(filterArr);

  return (
    <div className={cn("grid gap-7.5 min-w-60 self-start", className)}>
      <Title size="s">Showing 120 items</Title>

      <hr />

      <FilterCheckboxGroup
        checked={filter.category}
        setChecked={filter.categoryToggle}
        items={filterArr.category}
        title="Category"
      />

      <hr />

      <FilterCheckboxGroup
        checked={filter.price}
        setChecked={filter.priceToggle}
        items={filterArr.priceRange.map((el) => ({
          id: el.id,
          name: el.to ? `$${el.from} - $${el.to}` : `$${el.from}`,
        }))}
        title="Price Range"
      />

      <hr />

      <FilterCheckboxGroup
        checked={filter.color}
        setChecked={filter.colorToggle}
        isColor
        items={filterArr.color}
        title="Color"
      />

      <hr />
    </div>
  );
};
