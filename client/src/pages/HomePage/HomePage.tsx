import MainCarousel from "@/pages/HomePage/Components/MainCarousel/MainCarousel.tsx";
import featuredImage from "@/assets/going_out_outfits.webp";
import GenderSelection from "@/pages/HomePage/Components/GenderSelection/GenderSelection.tsx";
import FeaturedImage from "@/pages/HomePage/Components/FeaturedImage.tsx";
import Section from "@/pages/HomePage/Components/Section/Section.tsx";
import { useLoadFeaturedProducts } from "@/pages/HomePage/hooks/useLoadFeaturedProducts.ts";
import useLoadRecommendedProducts from "@/pages/HomePage/hooks/useLoadRecommendedProducts.ts";
import useMakeProductFavorite from "@/pages/HomePage/hooks/useMakeProductFavorite.ts";
import useUnmakeProductFavorite from "@/pages/HomePage/hooks/useUnmakeProductFavorite.ts";

export default function HomePage() {
    const featuredImageText = "Новая коллекция";
    const {
        products: featuredProducts,
        isLoading: areFeaturedProductsLoading,
        ref: lastFeaturedProductRef,
    } = useLoadFeaturedProducts();

    const {
        products: recommendedProducts,
        isLoading: areRecommendedProductsLoading,
        ref: lastRecommendedProductRef,
    } = useLoadRecommendedProducts();

    const makeFeaturedProductFavorite = useMakeProductFavorite("featured-products");
    const unmakeFeaturedProductFavorite = useUnmakeProductFavorite("featured-products");

    const makeRecommendedProductFavorite = useMakeProductFavorite("recommended-products");
    const unmakeRecommendedProductFavorite = useUnmakeProductFavorite("recommended-products");

    return (
        <div className="flex flex-col m-4">
            <MainCarousel />
            <GenderSelection />
            <Section
                title="Новинки"
                products={featuredProducts}
                areProductsLoading={areFeaturedProductsLoading}
                ref={lastFeaturedProductRef}
                makeProductFavorite={makeFeaturedProductFavorite}
                unmakeProductFavorite={unmakeFeaturedProductFavorite}
            />
            <FeaturedImage imageSrc={featuredImage} text={featuredImageText} />
            <Section
                title="Вам может понравиться"
                products={recommendedProducts}
                areProductsLoading={areRecommendedProductsLoading}
                ref={lastRecommendedProductRef}
                makeProductFavorite={makeRecommendedProductFavorite}
                unmakeProductFavorite={unmakeRecommendedProductFavorite}
            />
        </div>
    );
}
