import { useLoadProducts } from "@/pages/HomePage/hooks/useLoadProducts.ts";

export default function useLoadRecommendedProducts() {
    return useLoadProducts("recommended-products", (page) => `recommended-products?page=${page}`);
}
