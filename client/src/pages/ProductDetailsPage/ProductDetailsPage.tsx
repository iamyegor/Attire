import { useLocation, useParams } from "react-router-dom";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import Breadcrumbs from "@/pages/CatalogPage/components/Breadcrumbs.tsx";
import React from "react";
import { useLoadProductDetails } from "@/pages/ProductDetailsPage/hooks/useLoadProductDetails.ts";
import { useDecreaseCartQuantity } from "@/pages/ProductDetailsPage/hooks/useDecreaseCartQuantity.ts";
import { useIncreaseCartQuantity } from "@/pages/ProductDetailsPage/hooks/useIncreaseCartQuantity.ts";
import { useLikeProductDetails } from "@/pages/ProductDetailsPage/hooks/useLikeProductDetails.ts";
import { useUnlikeProductDetails } from "@/pages/ProductDetailsPage/hooks/useUnlikeProductDetails.ts";
import { useSelectedProductDetails } from "@/pages/ProductDetailsPage/hooks/useSelectedProductDetails.ts";
import Selectors from "@/pages/ProductDetailsPage/components/Selectors/Selectors.tsx";
import ProductMainInfo from "@/pages/ProductDetailsPage/components/ProductMainInfo.tsx";
import CartActions from "@/pages/ProductDetailsPage/components/CartActions.tsx";
import ProductSecondaryInfo from "@/pages/ProductDetailsPage/components/ProductSecondaryInfo.tsx";
import ProductDetailsFooter from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/ProductDetailsFooter.tsx";
import ImageGallery from "@/pages/ProductDetailsPage/components/ImageGallery/ImageGallery.tsx";

export default function ProductDetailsPage() {
    const { productId } = useParams() as { productId: string };
    const { state } = useLocation();
    const category: Category | null = state?.category;
    const type: Type | null = state?.type;
    const { productDetails } = useLoadProductDetails(productId);
    const { selectedColor, selectedSize, setSelectedColor, setSelectedSize } =
        useSelectedProductDetails(productDetails);

    const { decreaseCartQuantityMutate } = useDecreaseCartQuantity(productId);
    const { increaseCartQuantityMutate } = useIncreaseCartQuantity(productId);
    const { unlikeProductDetailsMutate } = useUnlikeProductDetails(productId);
    const { likeProductDetailsMutate } = useLikeProductDetails(productId);

    function increaseCartQuantity() {
        if (!selectedSize || !selectedColor) return;

        increaseCartQuantityMutate({ size: selectedSize, color: selectedColor });
    }

    function decreaseCartQuantity() {
        if (!selectedSize || !selectedColor) return;

        decreaseCartQuantityMutate({ size: selectedSize, color: selectedColor });
    }

    function toggleLike() {
        if (!productDetails) return;

        if (productDetails.isLiked) {
            unlikeProductDetailsMutate();
        } else {
            likeProductDetailsMutate();
        }
    }

    if (!productDetails) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="bg-white text-gray-900 font-sans leading-relaxed pb-10">
            <Breadcrumbs type={type} category={category} productName={productDetails?.name} />
            <div className="pt-8 p-4 flex flex-col md:flex-row items-start md:space-x-8 space-y-6 md:space-y-0">
                <ImageGallery images={productDetails.images} />

                <div className="w-full md:flex-1 lg:flex-none lg:w-[350px] xl:w-[420px] space-y-5">
                    <ProductMainInfo name={productDetails.name} price={productDetails.price} />
                    <Selectors
                        colors={productDetails.colors}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                        sizes={productDetails.sizes}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                    />
                    <CartActions
                        quantityInCart={productDetails.quantityInCart}
                        decreaseCartQuantity={decreaseCartQuantity}
                        increaseCartQuantity={increaseCartQuantity}
                        toggleLike={toggleLike}
                        isLiked={productDetails.isLiked}
                    />
                    <ProductSecondaryInfo
                        deliveryText="Бесплатная доставка от 0 ₽"
                        description={productDetails.description}
                    />
                </div>
            </div>
            <ProductDetailsFooter productDetails={productDetails} />
        </div>
    );
}
