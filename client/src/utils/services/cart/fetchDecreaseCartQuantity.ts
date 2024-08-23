import api from "@/lib/api.ts";

export async function fetchDecreaseCartQuantity({
    cartItemId,
    currentQuantity,
}: {
    cartItemId: string;
    currentQuantity: number;
}) {
    await api.post(`cart/${cartItemId}/decrease-cart-quantity`, { quantity: currentQuantity - 1 });
}
