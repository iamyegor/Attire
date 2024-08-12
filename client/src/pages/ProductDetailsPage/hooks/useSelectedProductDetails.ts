import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import { useEffect, useState } from "react";

export function useSelectedProductDetails(productDetails: ProductDetails | null) {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    useEffect(() => {
        if (!productDetails) return;
        if (selectedColor && selectedSize) return;

        setSelectedSize(productDetails.sizes[0]);
        setSelectedColor(productDetails.colors[0].name);
    }, [productDetails]);

    return { selectedColor, selectedSize, setSelectedColor, setSelectedSize };
}
