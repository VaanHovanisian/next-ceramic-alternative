import { useRouter } from "next/navigation";
import React from "react";
import qs from "qs";
import { Filter } from "./use-filter";

export const useFilterQuery = (data: Filter) => {
  const router = useRouter();

  React.useEffect(() => {
    const query = qs.stringify({
      category: Array.from(data.category),
      price: Array.from(data.price),
      color: Array.from(data.color),
    });

    router.push(`?${query}`);
  }, [data.category, data.color, data.price]);
};
