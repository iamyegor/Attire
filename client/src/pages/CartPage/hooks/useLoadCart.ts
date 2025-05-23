import CartItem from "@/pages/CartPage/types/CartItem.ts";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api.ts";

export function useLoadCart(queryKey: string[]) {
    const { data, isLoading } = useQuery({
        queryKey,
        queryFn: fetchCart,
        gcTime: 0,
        retry: 1,
    });

    async function fetchCart() {
        const { data } = await api.get<CartItem[]>(`users/carts`);
        return data.sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
    }

    console.log(data);

    return { cartItems: data || [], isLoading };
}
