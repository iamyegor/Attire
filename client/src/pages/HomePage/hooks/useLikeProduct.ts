import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductsResponse } from "@/pages/HomePage/types/ProductsResponse.ts";
import fetchLikeProduct from "@/utils/services/fetchLikeProduct.ts";

export default function useLikeProduct(queryKey: string[]) {
    const queryClient = useQueryClient();

    const likeProductMutation = useMutation({
        mutationFn: fetchLikeProduct,
        onMutate: async (productId: string) => {
            await queryClient.cancelQueries({ queryKey });

            const previousProducts =
                queryClient.getQueryData<InfiniteData<ProductsResponse, unknown>>(queryKey);

            queryClient.setQueryData<InfiniteData<ProductsResponse, unknown>>(queryKey, (data) => {
                if (!data) return previousProducts;

                return {
                    ...data,
                    pages: markProductAsFavorite(productId, data.pages),
                };
            });

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

    return likeProductMutation.mutate;
}
