import Color from "@/types/Color.ts";

export interface ProductDetails {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    colors: Color[];
    sizes: string[];
    quantityInCart: number;
    isLiked: boolean;
    composition: string;
    category: string;
    brand: string;
    sku: string;
}
