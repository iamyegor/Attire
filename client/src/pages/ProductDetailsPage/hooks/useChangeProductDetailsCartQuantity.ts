import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import requestCartQuantityChange from "@/utils/services/cart/requestCartQuantityChange.ts";

export function useChangeProductDetailsCartQuantity(queryKey: string[]) {
    const queryClient = useQueryClient();

    const changeCartQuantity = useMutation({
        mutationFn: requestCartQuantityChange,
        onMutate: async ({ cartItemId, newQuantity }) => {
            await queryClient.cancelQueries({ queryKey });

            const previousData = queryClient.getQueryData<ProductDetails>(queryKey);

            queryClient.setQueryData<ProductDetails>(queryKey, (data) => {
                if (!data) return previousData;

                return {
                    ...data,
                    cartItemsInfo: data.cartItemsInfo.map((x) => {
                        return x.cartItemId == cartItemId
                            ? { ...x, quantityInCart: newQuantity }
                            : x;
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

    return { changeCartQuantityMutate: changeCartQuantity.mutate };
}
