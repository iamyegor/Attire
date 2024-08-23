import api from "@/lib/api.ts";
import ChangeCartQuantityData from "@/types/ChangeCartQuantityData.ts";

export default async function requestCartQuantityChange(data: ChangeCartQuantityData) {
    await api.put(`users/carts/${data.cartItemId}/quantity`, { quantity: data.newQuantity });
}
