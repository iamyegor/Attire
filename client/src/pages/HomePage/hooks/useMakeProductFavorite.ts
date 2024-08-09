import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductsResponse } from "@/pages/HomePage/types/ProductsResponse.ts";
import api from "@/lib/api.ts";

export default function useMakeProductFavorite(queryKey: string) {
    const queryClient = useQueryClient();

    const makeProductFavoriteMutation = useMutation({
        mutationFn: makeProductFavorite,
        onMutate: async (productId: string) => {
            await queryClient.cancelQueries({ queryKey: [queryKey] });

            const previousProducts = queryClient.getQueryData<
                InfiniteData<ProductsResponse, unknown> | undefined
            >([queryKey]);

            queryClient.setQueryData<InfiniteData<ProductsResponse, unknown> | undefined>(
                [queryKey],
                (data) => {
                    if (!data) return previousProducts;

                    return {
                        ...data,
                        pages: markProductAsFavorite(productId, data.pages),
                    };
                },
            );

            return { previousProducts };
        },
        onError: (_, __, context) => {
            if (context?.previousProducts) {
                queryClient.setQueryData([queryKey], context?.previousProducts);
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        },
    });

    function markProductAsFavorite(
        productId: string,
        pages: ProductsResponse[],
    ): ProductsResponse[] {
        return pages.map((page) => ({
            ...page,
            products: page.products.map((product) =>
                product.id === productId ? { ...product, isFavorite: true } : product,
            ),
        }));
    }

    async function makeProductFavorite(productId: string) {
        const { data } = await api.post(`products/make-favorite`, { productId });
        return data;
    }

    return makeProductFavoriteMutation.mutate;
}
