import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api.ts";
import FavoritesResponse from "@/pages/FavoritesPage/types/FavoritesResponse.ts";

export function useRemoveFromFavorites(queryKey: string[]) {
    const queryClient = useQueryClient();
    const removeFromFavoritesMutation = useMutation({
        mutationFn: removeFromFavorites,
        onMutate: async (productId) => {
            await queryClient.cancelQueries({ queryKey });

            const previousData =
                queryClient.getQueryData<InfiniteData<FavoritesResponse>>(queryKey);

            queryClient.setQueryData<InfiniteData<FavoritesResponse>>(queryKey, (data) => {
                if (!data) return data;

                return {
                    ...data,
                    pages: data.pages.map((page) => ({
                        ...page,
                        products: page.favoriteProducts.filter((product) => product.id !== productId),
                    })),
                };
            });

            return { previousData };
        },
        onError: (_, __, context) => {
            if (context?.previousData) queryClient.setQueryData(queryKey, context.previousData);
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey }),
    });

    async function removeFromFavorites(productId: string) {
        await api.delete(`favorites/${productId}`);
    }

    return { removeFromFavorites: removeFromFavoritesMutation.mutate };
}
