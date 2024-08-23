import { useLoadProducts } from "@/pages/HomePage/hooks/useLoadProducts.ts";
import { useSearchParams } from "react-router-dom";

export default function useLoadSearchProducts(queryKey: (string | null)[]) {
    const [searchParams, _setSearchParams] = useSearchParams();
    const { products, isLoading, ref } = useLoadProducts(
        queryKey,
        (page) => `products?page=${page}&${searchParams.toString()}`,
    );

    return { products, isLoading, ref };
}
