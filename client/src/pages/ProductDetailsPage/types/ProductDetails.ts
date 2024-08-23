import Color from "@/types/Color.ts";
import ProductDetailsCartInfo from "@/pages/ProductDetailsPage/types/ProductDetailsCartInfo.ts";


export interface ProductDetails {
    id: string;
    title: string;
    price: number;
    liked: boolean;
    description: string;
    brand: string;
    sku: string;
    composition: string;
    categoryName: string;
    imagePaths: string[];
    colors: Color[];
    sizes: string[];
    cartItemsInfo: ProductDetailsCartInfo[];
}
