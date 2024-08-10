import { useOptimisticUpdate } from "@/hooks/useOptimisticUpdate.ts";
import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import api from "@/lib/api.ts";

export function useIncreaseCartQuantity(productId: string) {
    const increaseCartQuantityMutation = useOptimisticUpdate<ProductDetails>(
        ["product-details", productId],
        requestIncreaseCartQuantity,
        (data) => ({
            ...data,
            quantityInCart: data.quantityInCart + 1,
        }),
    );

    async function requestIncreaseCartQuantity() {
        await api.post(`products/${productId}/increase-cart-quantity`);
    }

    return { increaseCartQuantity: increaseCartQuantityMutation.mutate };
}
