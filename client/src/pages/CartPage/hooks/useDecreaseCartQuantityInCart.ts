import { useMutation, useQueryClient } from "@tanstack/react-query";
import CartItem from "@/pages/CartPage/types/CartItem.ts";
import { fetchDecreaseCartQuantity } from "@/utils/services/cart/fetchDecreaseCartQuantity.ts";

export function useDecreaseCartQuantityInCart(queryKey: string[]) {
    const queryClient = useQueryClient();

    const decreaseCartQuantityMutation = useMutation({
        mutationFn: fetchDecreaseCartQuantity,
        onMutate: async (cartItemId) => {
            await queryClient.cancelQueries({ queryKey });

            const previousData = queryClient.getQueryData<CartItem[]>(queryKey);

            queryClient.setQueryData<CartItem[]>(queryKey, (data) => {
                if (!data) return previousData;

                return data.map((item) => {
                    if (item.id === cartItemId) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                });
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

    return { decreaseCartQuantityMutate: decreaseCartQuantityMutation.mutate };
}
