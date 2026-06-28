import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "../title";
import { FilterCheckboxGroup } from "./filter-checkbox-group";
import { filter } from "@/constants/filter";

interface Props {
  className?: string;
}

export const Filter: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <Title size="s">Showing 120 items </Title>
      <hr />
      <FilterCheckboxGroup items={filter.category} title="Category" />
      <hr />
      <FilterCheckboxGroup
        items={filter.price.map((el) => ({
          name: `$${el.from} - $${el.to}`,
          id: el.id,
        }))}
        title="Price Range"
      />
      <hr />
      <FilterCheckboxGroup items={filter.color} title="Color" />
    </div>
  );
};
