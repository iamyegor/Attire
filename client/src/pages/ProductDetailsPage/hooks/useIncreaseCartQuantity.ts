import { useOptimisticUpdateWithData } from "@/hooks/useOptimisticUpdateWithData.ts";
import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import api from "@/lib/api.ts";
import { useQueryClient } from "@tanstack/react-query";

export function useIncreaseCartQuantity(productId: string) {
    const queryClient = useQueryClient();
    const queryKey = ["product-details", productId];

    const increaseCartQuantityMutation = useOptimisticUpdateWithData(
        queryKey,
        sendIncreaseCartQuantityRequest,
        onMutate,
    );

    async function onMutate() {
        await queryClient.cancelQueries({ queryKey });

        const previousData = queryClient.getQueryData<ProductDetails>(queryKey);

        queryClient.setQueryData<ProductDetails>(queryKey, (data) => {
            if (!data) return previousData;

            return { ...data, quantityInCart: data.quantityInCart + 1 };
        });

        return { previousData };
    }

    async function sendIncreaseCartQuantityRequest({
        size,
        color,
    }: {
        size: string;
        color: string;
    }) {
        await api.post(`products/${productId}/increase-cart-quantity`, { size, color });
    }

    return { increaseCartQuantityMutate: increaseCartQuantityMutation.mutate };
}
