import api from "@/lib/api.ts";

export default async function fetchLikeProduct(productId: string) {
    await api.post(`users/favoriteProducts/${productId}`);
}
