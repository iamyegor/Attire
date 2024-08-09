import { useSearchParams } from "react-router-dom";
import SortBy from "@/pages/CatalogPage/components/SortByComponent/types/SortyBy.ts";
import { useMemo } from "react";

export default function useChangeSorting() {
    const [searchParams, setSearchParams] = useSearchParams();
    const sorting = useMemo(() => {
        return SortBy.createBasedOnSearchParamValue(searchParams.get("sorting")) ?? SortBy.Popular;
    }, [searchParams.toString()]);

    function changeSorting(sortBy: SortBy) {
        setSearchParams((prevParams) => {
            prevParams.set("sorting", sortBy.searchParamValue);
            return prevParams;
        });
    }

    return { sorting, changeSorting };
}
