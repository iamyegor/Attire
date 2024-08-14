import axios from "axios";
import CartItem from "@/pages/CartPage/types/CartItem.ts";
import { useQuery } from "@tanstack/react-query";

export function useCart(queryKey: string[]) {
    const { data } = useQuery({
        queryKey,
        queryFn: fetchCart,
    });

    async function fetchCart() {
        const { data } = await axios.get<CartItem[]>(`cart`);
        return data;
    }

    return { cartItems: data || [] };
}
