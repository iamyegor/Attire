import Color from "@/types/Color.ts";
import ProductDetailsCartInfo from "@/pages/ProductDetailsPage/types/ProductDetailsCartInfo.ts";

export interface ProductDetails {
    id: string;
    title: string;
    titleEn: string;
    price: number;
    liked: boolean;
    description: string;
    descriptionEn: string;
    brand: string;
    sku: string;
    composition: string;
    compositionEn: string;
    categoryName: string;
    imagePaths: string[];
    colors: Color[];
    sizes: string[];
    cartItemsInfo: ProductDetailsCartInfo[];
}
