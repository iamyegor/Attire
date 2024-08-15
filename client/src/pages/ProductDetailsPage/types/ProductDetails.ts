import Color from "@/types/Color.ts";
import ProductDetailsCartInfo from "@/pages/ProductDetailsPage/types/ProductDetailsCartInfo.ts";


export interface ProductDetails {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    colors: Color[];
    sizes: string[];
    cartItemsInfo: ProductDetailsCartInfo[];
    isLiked: boolean;
    composition: string;
    category: string;
    brand: string;
    sku: string;
}
