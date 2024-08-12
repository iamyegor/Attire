import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { useOptimisticUpdateWithData } from "@/hooks/useOptimisticUpdateWithData.ts";
import api from "@/lib/api.ts";
import FavoritesResponse from "@/pages/FavoritesPage/types/FavoritesResponse.ts";

export function useRemoveFromFavorites(queryKey: string[]) {
    const queryClient = useQueryClient();
    const removeFromFavoritesMutation = useOptimisticUpdateWithData(
        ["favorites"],
        removeFromFavorites,
        onMutate,
    );

    async function onMutate(productId: string) {
        await queryClient.cancelQueries({ queryKey });

        const previousData = queryClient.getQueryData<InfiniteData<FavoritesResponse>>(queryKey);

        queryClient.setQueryData<InfiniteData<FavoritesResponse>>(queryKey, (data) => {
            if (!data) return data;

            return {
                ...data,
                pages: data.pages.map((page) => ({
                    ...page,
                    products: page.products.filter((product) => product.id !== productId),
                })),
            };
        });

        return { previousData };
    }

    async function removeFromFavorites(productId: string) {
        await api.delete(`favorites/${productId}`);
    }

    return { removeFromFavorites: removeFromFavoritesMutation.mutate };
}
