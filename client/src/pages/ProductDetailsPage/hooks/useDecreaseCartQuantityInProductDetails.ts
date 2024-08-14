import { useOptimisticUpdateWithData } from "@/hooks/useOptimisticUpdateWithData.ts";
import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import { useQueryClient } from "@tanstack/react-query";
import { fetchDecreaseCartQuantity } from "@/utils/services/fetchDecreaseCartQuantity.ts";

export function useDecreaseCartQuantityInProductDetails(productId: string) {
    const queryClient = useQueryClient();
    const queryKey = ["product-details", productId];

    const decreaseCartQuantityMutation = useOptimisticUpdateWithData<{
        size: string;
        color: string;
    }>(queryKey, (data) => fetchDecreaseCartQuantity({ ...data, productId }), onMutate);

    async function onMutate() {
        await queryClient.cancelQueries({ queryKey });

        const previousData = queryClient.getQueryData<ProductDetails>(queryKey);

        queryClient.setQueryData<ProductDetails>(queryKey, (data) => {
            if (!data) return previousData;

            const newQuantity = Math.max(data.quantityInCart - 1, 0);

            return { ...data, quantityInCart: newQuantity };
        });

        return { previousData };
    }

    return { decreaseCartQuantityMutate: decreaseCartQuantityMutation.mutate };
}
