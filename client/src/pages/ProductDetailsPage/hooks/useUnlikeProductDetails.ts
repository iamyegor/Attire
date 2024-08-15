import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import fetchUnlikeProduct from "@/utils/services/fetchUnlikeProduct.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUnlikeProductDetails(queryKey: string[]) {
    const queryClient = useQueryClient();

    const unlikeProductDetailsMutation = useMutation({
        mutationFn: fetchUnlikeProduct,
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey });

            const previousData = queryClient.getQueryData<ProductDetails>(queryKey);

            queryClient.setQueryData<ProductDetails>(queryKey, (data) => {
                if (!data) return previousData;

                return { ...data, isLiked: false };
            });

            return { previousData };
        },
        onError: (_, __, context) => {
            if (context?.previousData) queryClient.setQueryData(queryKey, context.previousData);
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey }),
    });

    return { unlikeProductDetailsMutate: unlikeProductDetailsMutation.mutate };
}
