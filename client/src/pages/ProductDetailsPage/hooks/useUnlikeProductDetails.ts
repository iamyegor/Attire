import { useOptimisticUpdate } from "@/hooks/useOptimisticUpdate.ts";
import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import sendUnlikeProductRequest from "@/utils/services/sendUnlikeProductRequest.tsx";

export function useUnlikeProductDetails(productId: string) {
    const unlikeProductDetailsMutation = useOptimisticUpdate<ProductDetails>(
        ["product-details", productId],
        () => sendUnlikeProductRequest(productId),
        (data) => ({ ...data, isLiked: false }),
    );

    return { unlikeProductDetails: unlikeProductDetailsMutation.mutate };
}
