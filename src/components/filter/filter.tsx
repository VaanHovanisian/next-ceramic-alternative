"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "../title";
import { FilterCheckboxGroup } from "./filter-checkbox-group";
import { useSet } from "react-use";
import { useFilter } from "@/hooks/filter/use-filter";
import { filter as filterArr } from "@/constants/filter";
import { useFilterQuery } from "@/hooks/filter/use-filter-query";

interface Props {
  className?: string;
}

export const Filter: React.FC<Props> = (props) => {
  const { className } = props;

  const filter = useFilter();
  useFilterQuery(filter);
  return (
    <div className={cn(" grid gap-7.5 min-w w-60  self-start", className)}>
      <Title size="s">Showing 120 items</Title>
      <hr />
      <FilterCheckboxGroup
        checked={filter.category}
        setCheked={filter.categoryToggle}
        items={filterArr.category}
        title="Category"
      />
      <hr />
      <FilterCheckboxGroup
        checked={filter.price}
        setCheked={filter.priceToggle}
        items={filterArr.price.map((el) => ({
          name: el.to ? ` $${el.from} - $${el.to}` : `$${el.from}`,
          id: el.id,
        }))}
        title="Price Range"
      />
      <hr />
      <FilterCheckboxGroup
        checked={filter.color}
        setCheked={filter.colorToggle}
        items={filterArr.color}
        title="Color"
        isColor
      />
    </div>
  );
};
