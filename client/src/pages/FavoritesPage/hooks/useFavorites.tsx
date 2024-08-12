import api from "@/lib/api.ts";
import { useInfiniteQuery } from "@tanstack/react-query";
import FavoritesResponse from "@/pages/FavoritesPage/types/FavoritesResponse.ts";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function useFavorites(queryKey: string[]) {
    const { data, fetchNextPage } = useInfiniteQuery({
        queryKey,
        queryFn: fetchFavorites,
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });

    async function fetchFavorites({ pageParam }: { pageParam: number }) {
        const { data } = await api.get<FavoritesResponse>(`favorites?page=${pageParam}`);
        return data;
    }

    const { inView, ref } = useInView();

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [JSON.stringify(data), inView]);

    const products = data?.pages.flatMap((page) => page.products) || [];

    return { products, ref };
}
