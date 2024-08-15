import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchIncreaseCartQuantity } from "@/utils/services/fetchIncreaseCartQuantity.ts";

export function useIncreaseCartQuantityInProductDetails(queryKey: string[]) {
    const queryClient = useQueryClient();

    const increaseCartQuantityMutation = useMutation({
        mutationFn: fetchIncreaseCartQuantity,
        onMutate: async (cartItemId: string) => {
            await queryClient.cancelQueries({ queryKey });

            const previousData = queryClient.getQueryData<ProductDetails>(queryKey);

            queryClient.setQueryData<ProductDetails>(queryKey, (data) => {
                if (!data) return previousData;

                return {
                    ...data,
                    cartItemsInfo: data.cartItemsInfo.map((x) => {
                        if (x.cartItemId == cartItemId) {
                            return { ...x, quantityInCart: Math.max(x.quantityInCart + 1, 0) };
                        }
                        return x;
                    }),
                };
            });

            return { previousData };
        },
        onError: (_, __, context) => {
            if (context?.previousData) queryClient.setQueryData(queryKey, context.previousData);
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey }),
    });

    return { increaseCartQuantityMutate: increaseCartQuantityMutation.mutate };
}
