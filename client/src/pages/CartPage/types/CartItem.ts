import Color from "@/types/Color.ts";

export default interface CartItem {
    id: string;
    productId: string;
    name: string;
    image: string;
    productPrice: number;
    size: string;
    color: Color;
    sku: string;
    quantity: number;
}
