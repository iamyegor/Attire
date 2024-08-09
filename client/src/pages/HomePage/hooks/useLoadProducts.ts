import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { ProductsResponse } from "@/pages/HomePage/types/ProductsResponse.ts";
import api from "@/lib/api.ts";

export function useLoadProducts(queryKey: string, getEndpoint: (page: number) => string) {
    const { data, status, fetchNextPage } = useInfiniteQuery({
        queryKey: [queryKey],
        queryFn: fetchProducts,
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });

    const { ref, inView } = useInView();

    async function fetchProducts({ pageParam }: { pageParam: number }): Promise<ProductsResponse> {
        const response = await api.get<ProductsResponse>(getEndpoint(pageParam));

        return response.data;
    }

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [JSON.stringify(data), inView]);

    const products = data?.pages.flatMap((page) => page.products) ?? [];
    return {
        products,
        isLoading: status === "pending",
        ref,
    };
}
