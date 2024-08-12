import Product from "@/types/Product.ts";

export default interface FavoritesResponse {
    products: Product[];
    nextPage: number | null;
}
