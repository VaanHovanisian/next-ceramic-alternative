import { useRouter, useSearchParams } from "next/navigation";
import QueryString from "qs";

export const usePagination = (currentPage: number, totalPages: number) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentParams = QueryString.parse(searchParams.toString());
  const goPage = (page: number) => {
    const query = QueryString.stringify({
      ...currentParams,
      page,
    });
    router.push(`?${query}`);
  };

  const next = () => {
    goPage(currentPage + 1);
  };
  const prev = () => {
    goPage(currentPage - 1);
  };

  const pages = Array(totalPages)
    .fill(1)
    .map((_, i) => i + 1);

  const isFirst = pages[0] === currentPage;
  const isLast = pages.at(-1) === currentPage;

  return { goPage, next, prev, pages, isFirst, isLast };
};
