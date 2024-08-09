import { useEffect, useState } from "react";
import ProductQueryParams from "@/pages/CatalogPage/types/ProductQueryParams.ts";
import SortBy from "@/pages/CatalogPage/components/SortByComponent/types/SortyBy.ts";
import { useSearchParams } from "react-router-dom";

export default function useProductQueryParams() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParams, _] = useSearchParams();
    const [productQueryParams, setProductQueryParams] = useState<ProductQueryParams>(
        defaultProductQueryParams(),
    );

    useEffect(() => {
        const sortingSearchParamValue = searchParams.get("sorting");
        const colors = searchParams.get("colors")?.split(",") ?? [];
        const sizes = searchParams.get("sizes")?.split(",") ?? [];
        const materials = searchParams.get("materials")?.split(",") ?? [];
        const minPrice = searchParams.get("minPrice");
        const maxPrice = searchParams.get("maxPrice");

        setProductQueryParams({
            sorting:
                SortBy.createBasedOnSearchParamValue(sortingSearchParamValue) ?? SortBy.Popular,
            filters: {
                colors,
                sizes,
                materials,
                minPrice: minPrice ? parseInt(minPrice) : null,
                maxPrice: maxPrice ? parseInt(maxPrice) : null,
            },
        });
    }, [searchParams.toString()]);

    function defaultProductQueryParams() {
        return {
            sorting: SortBy.Popular,
            filters: {
                colors: [],
                sizes: [],
                materials: [],
                minPrice: null,
                maxPrice: null,
            },
        };
    }

    return { productQueryParams };
}
