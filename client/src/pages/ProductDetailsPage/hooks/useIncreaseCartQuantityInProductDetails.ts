import { useOptimisticUpdateWithData } from "@/hooks/useOptimisticUpdateWithData.ts";
import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import { useQueryClient } from "@tanstack/react-query";
import { fetchIncreaseCartQuantity } from "@/utils/services/fetchIncreaseCartQuantity.ts";

export function useIncreaseCartQuantityInProductDetails(productId: string) {
    const queryClient = useQueryClient();
    const queryKey = ["product-details", productId];

    const increaseCartQuantityMutation = useOptimisticUpdateWithData<{
        size: string;
        color: string;
    }>(queryKey, (data) => fetchIncreaseCartQuantity({ ...data }, productId), onMutate);

    async function onMutate() {
        await queryClient.cancelQueries({ queryKey });

        const previousData = queryClient.getQueryData<ProductDetails>(queryKey);

        queryClient.setQueryData<ProductDetails>(queryKey, (data) => {
            if (!data) return previousData;

            return { ...data, quantityInCart: data.quantityInCart + 1 };
        });

        return { previousData };
    }

    return { increaseCartQuantityMutate: increaseCartQuantityMutation.mutate };
}
