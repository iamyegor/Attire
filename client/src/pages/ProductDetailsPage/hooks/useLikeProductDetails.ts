import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetchLikeProduct from "@/utils/services/product/fetchLikeProduct.ts";

export function useLikeProductDetails(queryKey: string[]) {
    const queryClient = useQueryClient();

    const likeProductDetailsMutation = useMutation({
        mutationFn: fetchLikeProduct,
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey });

            const previousData = queryClient.getQueryData<ProductDetails>(queryKey);

            queryClient.setQueryData<ProductDetails>(queryKey, (data) => {
                if (!data) return previousData;

                return { ...data, isLiked: true };
            });

            return { previousData };
        },
        onError: (_, __, context) => {
            if (context?.previousData) queryClient.setQueryData(queryKey, context.previousData);
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey }),
    });

    return { likeProductDetailsMutate: likeProductDetailsMutation.mutate };
}
