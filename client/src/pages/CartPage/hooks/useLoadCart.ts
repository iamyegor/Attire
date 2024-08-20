import CartItem from "@/pages/CartPage/types/CartItem.ts";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api.ts";

export function useLoadCart(queryKey: string[]) {
    const { data } = useQuery({
        queryKey,
        queryFn: fetchCart,
    });

    async function fetchCart() {
        const { data } = await api.get<CartItem[]>(`users/carts`);
        return data;
    }

    return { cartItems: data || [] };
}
