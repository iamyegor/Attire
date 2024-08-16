import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAddToCart } from "@/utils/services/cart/fetchAddToCart.ts";

export function useAddToCart(queryKey: string[]) {
    const queryClient = useQueryClient();
    const addToCartMutation = useMutation({
        mutationFn: fetchAddToCart,
        onSettled: () => queryClient.invalidateQueries({ queryKey }),
    });

    return { addToCartMutation };
}
