import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductsResponse } from "@/pages/HomePage/types/ProductsResponse.ts";
import api from "@/lib/api.ts";

export default function useUnmakeProductFavorite(queryKey: string[]) {
    const queryClient = useQueryClient();

    const unmakeProductFavoriteMutation = useMutation({
        mutationFn: makeProductFavorite,
        onMutate: async (productId: string) => {
            await queryClient.cancelQueries({ queryKey });

            const previousProducts = queryClient.getQueryData<
                InfiniteData<ProductsResponse, unknown> | undefined
            >(queryKey);

            queryClient.setQueryData<InfiniteData<ProductsResponse, unknown> | undefined>(
                queryKey,
                (data) => {
                    if (!data) return previousProducts;

                    return {
                        ...data,
                        pages: unmarkProductAsFavorite(productId, data.pages),
                    };
                },
            );

            return { previousProducts };
        },
        onError: (_, __, context) => {
            if (context?.previousProducts) {
                queryClient.setQueryData(queryKey, context?.previousProducts);
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey });
        },
    });

    function unmarkProductAsFavorite(
        productId: string,
        pages: ProductsResponse[],
    ): ProductsResponse[] {
        return pages.map((page) => ({
            ...page,
            products: page.products.map((product) =>
                product.id === productId ? { ...product, isFavorite: false } : product,
            ),
        }));
    }

    async function makeProductFavorite(productId: string) {
        const { data } = await api.post(`products/unmake-favorite`, { productId });
        return data;
    }

    return unmakeProductFavoriteMutation.mutate;
}
