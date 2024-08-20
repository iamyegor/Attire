import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductsResponse } from "@/pages/HomePage/types/ProductsResponse.ts";
import fetchLikeProduct from "@/utils/services/product/fetchLikeProduct.ts";

export default function useLikeProduct(queryKey: string[]) {
    const queryClient = useQueryClient();

    const likeProductMutation = useMutation({
        mutationFn: fetchLikeProduct,
        onMutate: async (productId: string) => {
            await queryClient.cancelQueries({ queryKey });

            const previousData =
                queryClient.getQueryData<InfiniteData<ProductsResponse, unknown>>(queryKey);

            queryClient.setQueryData<InfiniteData<ProductsResponse, unknown>>(queryKey, (data) => {
                if (!data) return previousData;

                return {
                    ...data,
                    pages: data.pages.map((page) => ({
                        ...page,
                        products: page.products.map((product) =>
                            product.id === productId ? { ...product, liked: true } : product,
                        ),
                    })),
                };
            });

            return { previousData };
        },
        onError: (_, __, context) => {
            if (context?.previousData) queryClient.setQueryData(queryKey, context?.previousData);
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey }),
    });

    return likeProductMutation.mutate;
}
