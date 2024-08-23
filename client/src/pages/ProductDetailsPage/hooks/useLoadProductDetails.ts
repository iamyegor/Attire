import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api.ts";
import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";

export function useLoadProductDetails(productId: string) {
    const { data = null, isLoading } = useQuery({
        queryKey: ["product-details", productId],
        queryFn: () => fetchProductDetails(),
    });

    async function fetchProductDetails() {
        const { data } = await api.get<ProductDetails>(`products/${productId}`);
        return data;
    }

    return { productDetails: data, isLoading };
}
