import api from "@/lib/api.ts";

export default async function fetchUnlikeProduct(productId: string) {
    await api.post(`products/unmake-favorite`, { productId });
}
