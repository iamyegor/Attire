import { useOptimisticUpdate } from "@/hooks/useOptimisticUpdate.ts";
import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import api from "@/lib/api.ts";

export function useDecreaseCartQuantity(productId: string) {
    const decreaseCartQuantityMutation = useOptimisticUpdate<ProductDetails>(
        ["product-details", productId],
        requestDecreaseCartQuantity,
        (data) => ({
            ...data,
            quantityInCart: data.quantityInCart - 1,
        }),
    );

    async function requestDecreaseCartQuantity() {
        await api.post(`products/${productId}/decrease-cart-quantity`);
    }

    return { decreaseCartQuantity: decreaseCartQuantityMutation.mutate };
}
