import api from "@/lib/api.ts";

export async function fetchIncreaseCartQuantity({
    cartItemId,
    currentQuantity,
}: {
    cartItemId: string;
    currentQuantity: number;
}) {
    await api.post(`cart/${cartItemId}/increase-cart-quantity`, { quantity: currentQuantity + 1 });
}
