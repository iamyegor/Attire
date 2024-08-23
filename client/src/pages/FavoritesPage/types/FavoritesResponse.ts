import Product from "@/types/Product.ts";

export default interface FavoritesResponse {
    favoriteProducts: Product[];
    nextPageNumber: number | null;
}
