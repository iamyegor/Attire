import api from "@/lib/api.ts";

export default async function sendLikeProductRequest(productId: string) {
    await api.post(`products/make-favorite`, { productId });
}
