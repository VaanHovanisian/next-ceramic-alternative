"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "../title";
import { FilterCheckboxGroup } from "./filter-checkbox-group";
import { filter } from "@/constants/filter";
import { useSet } from "react-use";

interface Props {
  className?: string;
}

export const Filter: React.FC<Props> = (props) => {
  const { className } = props;
  const [category, { toggle: categoryToggle }] = useSet<string>(new Set([]));
  const [price, { toggle: priceToggle }] = useSet<string>(new Set([]));
  const [color, { toggle: colorToggle }] = useSet<string>(new Set([]));
  const [] = useSet(new Set([]));
  return (
    <div className={cn(" grid gap-7.5 min-w w-60  self-start", className)}>
      <Title size="s">Showing 120 items</Title>
      <hr />
      <FilterCheckboxGroup
        checked={category}
        setCheked={categoryToggle}
        items={filter.category}
        title="Category"
      />
      <hr />
      <FilterCheckboxGroup
        checked={price}
        setCheked={priceToggle}
        items={filter.price.map((el) => ({
          name: el.to ? ` $${el.from} - $${el.to}` : `$${el.from}`,
          id: el.id,
        }))}
        title="Price Range"
      />
      <hr />
      <FilterCheckboxGroup
        checked={color}
        setCheked={colorToggle}
        items={filter.color}
        title="Color"
        isColor
      />
    </div>
  );
};
