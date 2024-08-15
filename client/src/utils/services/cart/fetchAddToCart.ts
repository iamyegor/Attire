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
    const { data } = await api.post<string>("/cart/add", { productId, size, color });
    return data;
}
