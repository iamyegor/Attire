import { useLoadProducts } from "@/pages/HomePage/hooks/useLoadProducts.ts";

export function useLoadFeaturedProducts() {
    return useLoadProducts("featured-products", (page) => `featured-products?page=${page}`);
}
