import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import { useState } from "react";
import AboutProduct from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/AboutProduct/AboutProduct";
import Reviews from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/Reviews/Reviews.tsx";
import useProductDetailsFooterTranslation from "./hooks/useProductDetailsFooterTranslation";

interface ProductDetailsFooterProps {
    productDetails: ProductDetails;
}

export default function ProductDetailsFooter({ productDetails }: ProductDetailsFooterProps) {
    const t = useProductDetailsFooterTranslation();
    const [selectedView, setSelectedView] = useState(t.about);

    function button(text: string) {
        return (
            <button
                className="font-medium text-gray-900 hover:bg-neutral-200 p-2 px-3 rounded-lg"
                onClick={() => setSelectedView(text)}
            >
                {text}
            </button>
        );
    }

    return (
        <div className="px-4 space-y-2">
            <div className="flex space-x-3">
                {button(t.about)}
                {button(t.reviews)}
            </div>
            {selectedView === t.about ? (
                <AboutProduct productDetails={productDetails} />
            ) : (
                <Reviews productId={productDetails.id} />
            )}
        </div>
    );
}
