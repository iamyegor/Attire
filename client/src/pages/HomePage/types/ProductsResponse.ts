import Product from "@/types/Product.ts";

export interface ProductsResponse {
    products: Product[];
    nextPage: number | null;
}
