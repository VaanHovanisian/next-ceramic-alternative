import { useSet } from "react-use";

export interface Filter {
  category: Set<string>;
  price: Set<string>;
  priceToggle: (key: string) => void;
  color: Set<string>;
  colorToggle: (key: string) => void;
  categoryToggle: (key: string) => void;
}

export const useFilter = () => {
  const [category, { toggle: categoryToggle }] = useSet<string>(new Set([]));
  const [price, { toggle: priceToggle }] = useSet<string>(new Set([]));
  const [color, { toggle: colorToggle }] = useSet<string>(new Set([]));

  return {
    category,
    price,
    priceToggle,
    color,
    colorToggle,
    categoryToggle,
  };
};
