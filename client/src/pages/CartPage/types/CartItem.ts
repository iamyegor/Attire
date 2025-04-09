import Color from "@/types/Color.ts";

export default interface CartItem {
    id: string;
    imagePath: string;
    productId: string;
    productTitle: string;
    productTitleEn: string;
    productPrice: number;
    sku: string;
    size: string;
    color: Color;
    quantity: number;
    createdAt: Date;
}
