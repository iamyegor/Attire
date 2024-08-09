import ProductSkeleton from "@/pages/HomePage/Components/Section/ProductSkeleton.tsx";

export default function ProductListSkeleton() {
    return (
        <>
            <div className="ml-4"></div>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
        </>
    );
}
