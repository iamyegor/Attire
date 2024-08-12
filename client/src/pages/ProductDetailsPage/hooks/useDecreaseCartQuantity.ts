import { useOptimisticUpdateWithData } from "@/hooks/useOptimisticUpdateWithData.ts";
import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import api from "@/lib/api.ts";
import { useQueryClient } from "@tanstack/react-query";

export function useDecreaseCartQuantity(productId: string) {
    const queryClient = useQueryClient();
    const queryKey = ["product-details", productId];

    const decreaseCartQuantityMutation = useOptimisticUpdateWithData(
        queryKey,
        sendDecreaseCartQuantityRequest,
        onMutate,
    );

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

    async function sendDecreaseCartQuantityRequest({
        size,
        color,
    }: {
        size: string;
        color: string;
    }) {
        await api.post(`products/${productId}/decrease-cart-quantity`, { size, color });
    }

    return { decreaseCartQuantityMutate: decreaseCartQuantityMutation.mutate };
}
