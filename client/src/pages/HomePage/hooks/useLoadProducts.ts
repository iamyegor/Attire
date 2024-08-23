import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { ProductsResponse } from "@/pages/HomePage/types/ProductsResponse.ts";
import api from "@/lib/api.ts";

export function useLoadProducts(
    queryKey: (string | null)[],
    getEndpoint: (page: number) => string,
) {
    const { data, isLoading, fetchNextPage } = useInfiniteQuery({
        queryKey: queryKey,
        queryFn: fetchProducts,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPageNumber,
    });

    const { ref, inView } = useInView();

    async function fetchProducts({ pageParam }: { pageParam: number }): Promise<ProductsResponse> {
        const { data } = await api.get<ProductsResponse>(getEndpoint(pageParam));
        return data;
    }

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [JSON.stringify(data), inView, fetchNextPage]);

    const products = data?.pages.flatMap((page) => page.products) ?? [];
    return {
        products,
        isLoading,
        ref,
    };
}
