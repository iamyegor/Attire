import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll.tsx";
import ProductCard from "@/pages/HomePage/Components/Section/ProductCard.tsx";
import Product from "@/types/Product.ts";
import ProductListSkeleton from "@/pages/HomePage/Components/Section/ProductListSkeleton.tsx";
import React from "react";
import ProductCarousel from "@/pages/HomePage/Components/Section/ProductCarousel.tsx";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import FlexibleSkeleton from "@/components/ui/FlexibleSkeleton.tsx";

interface SectionProps {
    title: string;
    products: Product[];
    areProductsLoading: boolean;
    likeProduct: (productId: string) => void;
    unlikeProduct: (productId: string) => void;
    type: Type | null;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
    ({ title, products, areProductsLoading, likeProduct, unlikeProduct, type = null }, ref) => {
        return (
            <section className="my-4 mt-6 md:ml-20">
                <h2 className="text-3xl text-center sm:text-left font-bold text-gray-600 mb-3 sm:ml-3">
                    {title}
                </h2>
                <div className="hidden sm:block">
                    <HorizontalScroll>
                        {products.map((product, index) => (
                            <div className="max-w-[280px] flex-shrink-0" key={index}>
                                <ProductCard
                                    product={product}
                                    likeProduct={likeProduct}
                                    unlikeProduct={unlikeProduct}
                                    type={type}
                                />
                            </div>
                        ))}
                        {areProductsLoading && <ProductListSkeleton />}
                        <div data-name="last-element" ref={ref}></div>
                    </HorizontalScroll>
                </div>
                <div className="block sm:hidden">
                    <ProductCarousel
                        products={products}
                        likeProduct={likeProduct}
                        unlikeProduct={unlikeProduct}
                        type={type}
                    />
                    {areProductsLoading && (
                        <div className="w-full" style={{ aspectRatio: "10/16" }}>
                            <FlexibleSkeleton />
                        </div>
                    )}
                </div>
            </section>
        );
    },
);

export default Section;
