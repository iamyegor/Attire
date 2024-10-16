import DetailRow from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/DetailRow.tsx";
import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";
import useAboutProductTranslation from "./hooks/useAboutProductTranslation";

interface AboutProductProps {
    productDetails: ProductDetails;
}

export default function AboutProduct({ productDetails }: AboutProductProps) {
    const t = useAboutProductTranslation();

    return (
        <div className="mt-2 max-w-[750px] ">
            <DetailRow
                label={t.composition}
                value={productDetails.composition}
                className="bg-neutral-200"
            />
            <DetailRow label={t.category} value={productDetails.categoryName} />
            <DetailRow label={t.brand} value={productDetails.brand} className="bg-neutral-200" />
            <DetailRow label={t.sku} value={productDetails.sku} />
        </div>
    );
}
