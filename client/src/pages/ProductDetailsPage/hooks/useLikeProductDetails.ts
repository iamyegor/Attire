import { useOptimisticUpdate } from "@/hooks/useOptimisticUpdate.ts";
import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import sendLikeProductRequest from "@/utils/services/sendLikeProductRequest.ts";

export function useLikeProductDetails(productId: string) {
    const likeProductDetailsMutation = useOptimisticUpdate<ProductDetails>(
        ["product-details", productId],
        () => sendLikeProductRequest(productId),
        (data) => ({ ...data, isLiked: true }),
    );

    return { likeProductDetails: likeProductDetailsMutation.mutate };
}
