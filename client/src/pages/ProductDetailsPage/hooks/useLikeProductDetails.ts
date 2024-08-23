import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetchLikeProduct from "@/utils/services/product/fetchLikeProduct.ts";
import throwOnIncorrectError from "@/utils/throwOnIncorrectError.ts";

export function useLikeProductDetails(queryKey: string[], showLoginModal: () => void) {
    const queryClient = useQueryClient();

    const likeProductDetailsMutation = useMutation({
        mutationFn: fetchLikeProduct,
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey });

            const previousData = queryClient.getQueryData<ProductDetails>(queryKey);

            queryClient.setQueryData<ProductDetails>(queryKey, (data) => {
                if (!data) return previousData;

                return { ...data, liked: true };
            });

            return { previousData };
        },
        onError: (err, __, context) => {
            if (context?.previousData) queryClient.setQueryData(queryKey, context.previousData);

            const error = throwOnIncorrectError(err);
            if (error.response!.status === 401) {
                showLoginModal();
            }
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey }),
    });

    return { likeProductDetailsMutate: likeProductDetailsMutation.mutate };
}
