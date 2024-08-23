import api from "@/lib/api.ts";

export default async function requestCartItemDelete(cartItemId: string) {
    await api.delete(`users/carts/${cartItemId}`);
}
