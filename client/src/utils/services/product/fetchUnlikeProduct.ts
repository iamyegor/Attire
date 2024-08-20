import api from "@/lib/api.ts";

export default async function fetchUnlikeProduct(productId: string) {
    await api.delete(`users/favoriteProducts/${productId}`);
}
