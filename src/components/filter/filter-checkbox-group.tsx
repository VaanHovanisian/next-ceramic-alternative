/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "../title";
import { FilterCheckbox } from "./filter-checkbox";

interface Props {
  className?: string;
  title: string;
  items: any[];
  isColor?: boolean;
  checked: Set<string>;
<<<<<<< HEAD
  setCheked: (id: string) => void;
}

export const FilterCheckboxGroup: React.FC<Props> = (props) => {
  const { className, title, items, isColor, checked, setCheked } = props;
=======
  setChecked: (id: string) => void;
}

export const FilterCheckboxGroup: React.FC<Props> = (props) => {
  const { className, title, items, isColor, checked, setChecked } = props;
>>>>>>> Tagavor

  return (
    <div className={cn("", className)}>
      <Title className="mb-5.5" size="s">
        {title}
      </Title>
      <ul
        className={cn("grid gap-4", {
<<<<<<< HEAD
          "flex  items-center": isColor,
=======
          "flex items-center": isColor,
>>>>>>> Tagavor
        })}
      >
        {items.map((el, i) => (
          <li key={i}>
            <FilterCheckbox
<<<<<<< HEAD
              checked={checked.has(el.id.toString())}
              label={el.name}
              isColor={isColor}
              setChecked={() => setCheked(el.id.toString())}
=======
              isColor={isColor}
              checked={checked.has(el.id.toString())}
              label={el.name}
              setChecked={() => setChecked(el.id.toString())}
>>>>>>> Tagavor
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
