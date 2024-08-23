import Product from "@/types/Product.ts";

export interface ProductsResponse {
    products: Product[];
    nextPageNumber: number | null;
}
