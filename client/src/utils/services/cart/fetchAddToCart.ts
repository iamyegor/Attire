import api from "@/lib/api.ts";

export async function fetchAddToCart({
    productId,
    size,
    color,
}: {
    productId: string;
    size: string;
    color: string;
}) {
    await api.post<string>("users/carts", { productId, quantity: 1, size, color });
}
