import LoginModal from "@/components/LoginModal/LoginModal";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import GenderSelection from "@/pages/HomePage/Components/GenderSelection/GenderSelection.tsx";
import MainCarousel from "@/pages/HomePage/Components/MainCarousel/MainCarousel.tsx";
import NewCollection from "@/pages/HomePage/Components/NewCollection/NewCollection";
import Section from "@/pages/HomePage/Components/Section/Section.tsx";
import useLikeProduct from "@/pages/HomePage/hooks/useLikeProduct.ts";
import { useLoadProducts } from "@/pages/HomePage/hooks/useLoadProducts.ts";
import useUnlikeProduct from "@/pages/HomePage/hooks/useUnlikeProduct.ts";
import { useState } from "react";
import useHomePageTranslation from "./hooks/useHomePageTranslation";

export default function HomePage() {
    const newProductsQueryKey = ["new-products"];
    const recommendedProductsQueryKey = ["recommended-products"];
    const {
        products: newProducts,
        isLoading: areNewProductsLoading,
        ref: lastNewProductRef,
    } = useLoadProducts(newProductsQueryKey, (page) => `products/new?page=${page}`);
    const [isLoginModalShown, setIsLoginModalShown] = useState(false);
    const t = useHomePageTranslation();

    const {
        products: recommendedProducts,
        isLoading: areRecommendedProductsLoading,
        ref: lastRecommendedProductRef,
    } = useLoadProducts(recommendedProductsQueryKey, (page) => `products?page=${page}`);

    const likeNewProduct = useLikeProduct(newProductsQueryKey, () => setIsLoginModalShown(true));
    const unlikeNewProduct = useUnlikeProduct(newProductsQueryKey, () =>
        setIsLoginModalShown(true),
    );

    const likeRecommendedProduct = useLikeProduct(recommendedProductsQueryKey, () =>
        setIsLoginModalShown(true),
    );
    const unlikeRecommendedProduct = useUnlikeProduct(recommendedProductsQueryKey, () =>
        setIsLoginModalShown(true),
    );

    return (
        <div className="flex flex-col mt-0 m-4">
            <LoginModal
                isLoginModalShown={isLoginModalShown}
                hideLoginModal={() => setIsLoginModalShown(false)}
                type="like"
            />
            <MainCarousel />
            <GenderSelection />
            <Section
                title={t?.new ?? ""}
                products={newProducts}
                areProductsLoading={areNewProductsLoading}
                ref={lastNewProductRef}
                likeProduct={likeNewProduct}
                unlikeProduct={unlikeNewProduct}
                type={Type.New}
            />
            <NewCollection />
            <Section
                title={t?.recommended ?? ""}
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
