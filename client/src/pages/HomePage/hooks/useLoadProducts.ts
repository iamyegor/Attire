import api from "@/lib/api.ts";
import { ProductsResponse } from "@/pages/HomePage/types/ProductsResponse.ts";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useLoadProducts(
    queryKey: (string | null)[],
    getEndpoint: (page: number) => string,
) {
    const { data, isLoading, fetchNextPage } = useInfiniteQuery({
        queryKey: queryKey,
        queryFn: fetchProducts,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPageNumber,
        retry: 1,
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

    let products = (() => data?.pages.flatMap((page) => page.products))() ?? [];
    if (window.uiLanguage === "en") {
        products = products.map((product) => ({
            ...product,
            title: product.titleEn,
        }));
    }

    return {
        products,
        isLoading,
        ref,
    };
}
