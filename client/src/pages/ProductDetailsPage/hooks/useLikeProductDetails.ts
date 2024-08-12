import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import sendLikeProductRequest from "@/utils/services/sendLikeProductRequest.ts";
import { useQueryClient } from "@tanstack/react-query";
import { useOptimisticUpdateWithoutData } from "@/hooks/useOptimisticUpdateWithoutData.tsx";

export function useLikeProductDetails(productId: string) {
    const queryClient = useQueryClient();
    const queryKey = ["product-details", productId];

    const likeProductDetailsMutation = useOptimisticUpdateWithoutData<ProductDetails>(
        queryKey,
        () => sendLikeProductRequest(productId),
        onMutate,
    );

    async function onMutate() {
        await queryClient.cancelQueries({ queryKey });

        const previousData = queryClient.getQueryData<ProductDetails>(queryKey);

        queryClient.setQueryData<ProductDetails>(queryKey, (data) => {
            if (!data) return previousData;

            return { ...data, isLiked: true };
        });

        return { previousData };
    }

    return { likeProductDetailsMutate: likeProductDetailsMutation.mutate };
}
