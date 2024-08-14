import api from "@/lib/api.ts";

export async function fetchIncreaseCartQuantity(cartItemId: string) {
    await api.post(`cart/${cartItemId}/increase-cart-quantity`);
}
