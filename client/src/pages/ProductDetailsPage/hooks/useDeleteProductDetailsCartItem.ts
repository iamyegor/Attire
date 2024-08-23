import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import requestCartItemDelete from "@/utils/services/cart/requestCartItemDelete.ts";

export default function useDeleteProductDetailsCartItem(queryKey: string[]) {
    const queryClient = useQueryClient();

    const deleteCartItemMutation = useMutation({
        mutationFn: requestCartItemDelete,
        onMutate: async (cartItemId) => {
            await queryClient.cancelQueries({ queryKey });

            const previousData = queryClient.getQueryData<ProductDetails>(queryKey);

            queryClient.setQueryData<ProductDetails>(queryKey, (data) => {
                if (!data) return previousData;

                return {
                    ...data,
                    cartItemsInfo: data.cartItemsInfo.filter(
                        (item) => item.cartItemId !== cartItemId,
                    ),
                };
            });

            return { previousData };
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey }),
        onError(_, __, context) {
            if (context?.previousData) queryClient.setQueryData(queryKey, context.previousData);
        },
    });

    return { deleteCartItemMutate: deleteCartItemMutation.mutate };
}
