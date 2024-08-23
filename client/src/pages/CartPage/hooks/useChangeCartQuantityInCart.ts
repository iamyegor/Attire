import { useMutation, useQueryClient } from "@tanstack/react-query";
import requestCartQuantityChange from "@/utils/services/cart/requestCartQuantityChange.ts";
import CartItem from "@/pages/CartPage/types/CartItem.ts";

export default function useChangeCartQuantityInCart(queryKey: string[]) {
    const queryClient = useQueryClient();

    const changeCartQuantity = useMutation({
        mutationFn: requestCartQuantityChange,
        onMutate: async ({ cartItemId, newQuantity }) => {
            await queryClient.cancelQueries({ queryKey });

            const previousData = queryClient.getQueryData<CartItem[]>(queryKey);

            queryClient.setQueryData<CartItem[]>(queryKey, (data) => {
                if (!data) return previousData;

                return data.map((item) => {
                    if (item.id === cartItemId) {
                        return { ...item, quantity: newQuantity };
                    }
                    return item;
                });
            });

            return { previousData };
        },
        onError: (_, __, context) => {
            if (context?.previousData) queryClient.setQueryData(queryKey, context.previousData);
        },
        onSettled: () => queryClient.invalidateQueries({ queryKey }),
    });

    return { changeCartQuantityMutate: changeCartQuantity.mutate };
}
