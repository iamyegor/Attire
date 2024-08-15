import CartItem from "@/pages/CartPage/types/CartItem.ts";

export default interface CartResponse {
    cartItems: CartItem[];
    nextPage: number | null;
}
