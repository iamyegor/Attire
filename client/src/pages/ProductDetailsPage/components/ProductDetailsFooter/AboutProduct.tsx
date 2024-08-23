import DetailRow from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/DetailRow.tsx";
import { ProductDetails } from "@/pages/ProductDetailsPage/types/ProductDetails.ts";

interface AboutProductProps {
    productDetails: ProductDetails;
}

export default function AboutProduct({ productDetails }: AboutProductProps) {
    return (
        <div className="mt-2 max-w-[750px] ">
            <DetailRow
                label="Состав"
                value={productDetails.composition}
                className="bg-neutral-200"
            />
            <DetailRow label="Категория" value={productDetails.categoryName} />
            <DetailRow label="Бренд" value={productDetails.brand} className="bg-neutral-200" />
            <DetailRow label="Артикул" value={productDetails.sku} />
        </div>
    );
}
