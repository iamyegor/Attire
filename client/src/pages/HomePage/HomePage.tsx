import MainCarousel from "@/pages/HomePage/Components/MainCarousel/MainCarousel.tsx";
import featuredImage from "@/assets/going_out_outfits.webp";
import GenderSelection from "@/pages/HomePage/Components/GenderSelection/GenderSelection.tsx";
import FeaturedImage from "@/pages/HomePage/Components/FeaturedImage.tsx";
import Section from "@/pages/HomePage/Components/Section/Section.tsx";
import { useLoadFeaturedProducts } from "@/pages/HomePage/hooks/useLoadFeaturedProducts.ts";
import useLoadRecommendedProducts from "@/pages/HomePage/hooks/useLoadRecommendedProducts.ts";
import useLikeProduct from "@/pages/HomePage/hooks/useLikeProduct.ts";
import useUnlikeProduct from "@/pages/HomePage/hooks/useUnlikeProduct.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";

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

    const likeFeaturedProduct = useLikeProduct(["featured-products"]);
    const unlikeFeaturedProduct = useUnlikeProduct(["featured-products"]);

    const likeRecommendedProduct = useLikeProduct(["recommended-products"]);
    const unlikeRecommendedProduct = useUnlikeProduct(["recommended-products"]);

    return (
        <div className="flex flex-col m-4">
            <MainCarousel />
            <GenderSelection />
            <Section
                title="Новинки"
                products={featuredProducts}
                areProductsLoading={areFeaturedProductsLoading}
                ref={lastFeaturedProductRef}
                likeProduct={likeFeaturedProduct}
                unlikeProduct={unlikeFeaturedProduct}
                type={Type.New}
            />
            <FeaturedImage imageSrc={featuredImage} text={featuredImageText} />
            <Section
                title="Вам может понравиться"
                products={recommendedProducts}
                areProductsLoading={areRecommendedProductsLoading}
                ref={lastRecommendedProductRef}
                likeProduct={likeRecommendedProduct}
                unlikeProduct={unlikeRecommendedProduct}
                type={null}
            />
        </div>
    );
}
