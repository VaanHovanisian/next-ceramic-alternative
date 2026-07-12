import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useSearchParam } from "react-use";

interface SortProps {
  name: string;
  value: string;
}

export const useFilterSortQuery = (sort: SortProps[]) => {
  const router = useRouter();
  const searchParams = useSearchParams;
};
