import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll.tsx";
import ProductCard from "@/pages/HomePage/Components/Section/ProductCard.tsx";
import Product from "@/types/Product.ts";
import ProductListSkeleton from "@/pages/HomePage/Components/Section/ProductListSkeleton.tsx";
import React from "react";
import ProductCarousel from "@/pages/HomePage/Components/Section/ProductCarousel.tsx";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";

interface SectionProps {
    title: string;
    products: Product[];
    areProductsLoading: boolean;
    makeProductFavorite: (productId: string) => void;
    unmakeProductFavorite: (productId: string) => void;
    type: Type | null;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
    (
        {
            title,
            products,
            areProductsLoading,
            makeProductFavorite,
            unmakeProductFavorite,
            type = null,
        },
        ref,
    ) => {
        return (
            <section className="my-8 md:ml-20">
                <h2 className="text-3xl font-bold text-gray-600 mb-3 sm:ml-3">{title}</h2>
                <div className="hidden sm:block">
                    <HorizontalScroll>
                        {products.map((product, index) => (
                            <div className="max-w-[280px] flex-shrink-0">
                                <ProductCard
                                    key={index}
                                    product={product}
                                    likeProduct={makeProductFavorite}
                                    unlikeProduct={unmakeProductFavorite}
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
                        makeProductFavorite={makeProductFavorite}
                        unmakeProductFavorite={unmakeProductFavorite}
                        type={type}
                    />
                </div>
            </section>
        );
    },
);

export default Section;
