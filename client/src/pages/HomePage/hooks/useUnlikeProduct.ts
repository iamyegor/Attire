import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductsResponse } from "@/pages/HomePage/types/ProductsResponse.ts";
import fetchUnlikeProduct from "@/utils/services/product/fetchUnlikeProduct.ts";

export default function useUnlikeProduct(
    queryKey: (string | null)[],
    setShowLoginModal: () => void,
) {
    const queryClient = useQueryClient();

    const unlikeProductMutation = useMutation({
        mutationFn: fetchUnlikeProduct,
        onMutate: async (productId: string) => {
            await queryClient.cancelQueries({ queryKey });

            const previousData = queryClient.getQueryData<
                InfiniteData<ProductsResponse, unknown> | undefined
            >(queryKey);

            queryClient.setQueryData<InfiniteData<ProductsResponse, unknown> | undefined>(
                queryKey,
                (data) => {
                    if (!data) return previousData;

                    return {
                        ...data,
                        pages: unmarkProductAsFavorite(productId, data.pages),
                    };
                },
            );

            return { previousData };
        },
        onError: (_, __, context) => {
            if (context?.previousData) queryClient.setQueryData(queryKey, context?.previousData);

            setShowLoginModal();
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
                product.id === productId ? { ...product, liked: false } : product,
            ),
        }));
    }

    return unlikeProductMutation.mutate;
}
