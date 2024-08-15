import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import fetchUnlikeProduct from "@/utils/services/fetchUnlikeProduct.ts";
import { useQueryClient } from "@tanstack/react-query";
import { useOptimisticUpdateWithoutData } from "@/hooks/useOptimisticUpdateWithoutData.tsx";

export function useUnlikeProductDetails(productId: string) {
    const queryClient = useQueryClient();
    const queryKey = ["product-details", productId];

    const unlikeProductDetailsMutation = useOptimisticUpdateWithoutData<ProductDetails>(
        queryKey,
        () => fetchUnlikeProduct(productId),
        onMutate,
    );

    async function onMutate() {
        await queryClient.cancelQueries({ queryKey });

        const previousData = queryClient.getQueryData<ProductDetails>(queryKey);

        queryClient.setQueryData<ProductDetails>(queryKey, (data) => {
            if (!data) return previousData;

            return { ...data, isLiked: false };
        });

        return { previousData };
    }

    return { unlikeProductDetailsMutate: unlikeProductDetailsMutation.mutate };
}
