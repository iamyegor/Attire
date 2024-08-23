import { useMutation, useQueryClient } from "@tanstack/react-query";
import CartItem from "@/pages/CartPage/types/CartItem.ts";
import requestCartItemDelete from "@/utils/services/cart/requestCartItemDelete.ts";

export function useDeleteCartItem(queryKey: string[]) {
    const queryClient = useQueryClient();

    const deleteCartItemMutation = useMutation({
        mutationFn: requestCartItemDelete,
        onMutate: async (cartItemId) => {
            await queryClient.cancelQueries({ queryKey });

            const previousData = queryClient.getQueryData<CartItem[]>(queryKey);

            queryClient.setQueryData<CartItem[]>(queryKey, (data) => {
                if (!data) return previousData;

                return data.filter((item) => item.id !== cartItemId);
            });

            return { previousData };
        },
        onError(_, __, context) {
            context?.previousData && queryClient.setQueryData(queryKey, context.previousData);
        },
        onSettled() {
            queryClient.invalidateQueries({ queryKey });
        },
    });

    return { deleteCartItemMutate: deleteCartItemMutation.mutate };
}
