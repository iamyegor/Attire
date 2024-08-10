import api from "@/lib/api.ts";

export default async function sendUnlikeProductRequest(productId: string) {
    await api.post(`products/unmake-favorite`, { productId });
}
