import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAddToCart } from "@/utils/services/cart/fetchAddToCart.ts";
import throwOnIncorrectError from "@/utils/throwOnIncorrectError.ts";

export function useAddToCart(queryKey: string[], showLoginModal: () => void) {
    const queryClient = useQueryClient();

    const addToCartMutation = useMutation({
        mutationFn: fetchAddToCart,
        onSettled: () => queryClient.invalidateQueries({ queryKey }),
        onError: (err) => {
            const error = throwOnIncorrectError(err);
            if (error.response!.status == 401) {
                showLoginModal();
            }
        },
    });

    return { addToCartMutation };
}
