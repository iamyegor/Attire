import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import { useEffect, useState } from "react";
import ProductDetailsCartItemInfo from "@/pages/ProductDetailsPage/types/ProductDetailsCartInfo.ts";

export function useCurrentCartItemInfo(
    productDetails: ProductDetails | null,
    selectedSize: string | null,
    selectedColor: string | null,
) {
    const [currentCartItemInfo, setCurrentCartItemInfo] =
        useState<ProductDetailsCartItemInfo | null>(null);

    useEffect(() => {
        if (!productDetails) return;

        setCurrentCartItemInfo(
            productDetails.cartItemsInfo.find(
                (x) => x.size == selectedSize && x.color == selectedColor,
            ) ?? null,
        );
    }, [JSON.stringify(productDetails?.cartItemsInfo), selectedSize, selectedColor]);

    return { currentCartItemInfo };
}
