import api from "@/lib/api.ts";
import { useInfiniteQuery } from "@tanstack/react-query";
import FavoritesResponse from "@/pages/FavoritesPage/types/FavoritesResponse.ts";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function useLoadFavorites(queryKey: string[]) {
    const { data, isLoading, isSuccess, fetchNextPage } = useInfiniteQuery({
        queryKey,
        queryFn: fetchFavorites,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPageNumber,
        retry: false,
    });

    async function fetchFavorites({ pageParam }: { pageParam: number }) {
        const { data } = await api.get<FavoritesResponse>(
            `users/favoriteProducts?page=${pageParam}`,
        );
        return data;
    }

    const { inView, ref } = useInView();

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [JSON.stringify(data), inView]);

    const products = data?.pages.flatMap((page) => page.favoriteProducts) || [];

    return { products, isLoading, isSuccess, ref };
}
