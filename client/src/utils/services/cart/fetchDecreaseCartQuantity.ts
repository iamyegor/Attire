import api from "@/lib/api.ts";

export async function fetchDecreaseCartQuantity(cartItemId: string) {
    await api.post(`cart/${cartItemId}/decrease-cart-quantity`);
}
