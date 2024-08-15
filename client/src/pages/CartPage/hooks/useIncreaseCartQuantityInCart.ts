import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchIncreaseCartQuantity } from "@/utils/services/fetchIncreaseCartQuantity.ts";
import CartItem from "@/pages/CartPage/types/CartItem.ts";

export function useIncreaseCartQuantityInCart(queryKey: string[]) {
    const queryClient = useQueryClient();

    const increaseCartQuantityMutation = useMutation({
        mutationFn: fetchIncreaseCartQuantity,
        onMutate: async (cartItemId) => {
            await queryClient.cancelQueries({ queryKey });

            const previousData = queryClient.getQueryData<CartItem[]>(queryKey);

            queryClient.setQueryData<CartItem[]>(queryKey, (data) => {
                if (!data) return previousData;

                return data.map((item) => {
                    if (item.id === cartItemId) {
                        return { ...item, quantity: item.quantity + 1 };
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

    return { increaseCartQuantityMutate: increaseCartQuantityMutation.mutate };
}
