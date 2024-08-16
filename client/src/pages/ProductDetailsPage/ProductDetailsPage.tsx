import { useLocation, useParams } from "react-router-dom";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import Breadcrumbs from "@/pages/CatalogPage/components/Breadcrumbs.tsx";
import React from "react";
import { useLoadProductDetails } from "@/pages/ProductDetailsPage/hooks/useLoadProductDetails.ts";
import { useDecreaseCartQuantityInProductDetails } from "@/pages/ProductDetailsPage/hooks/useDecreaseCartQuantityInProductDetails.ts";
import { useIncreaseCartQuantityInProductDetails } from "@/pages/ProductDetailsPage/hooks/useIncreaseCartQuantityInProductDetails.ts";
import { useLikeProductDetails } from "@/pages/ProductDetailsPage/hooks/useLikeProductDetails.ts";
import { useUnlikeProductDetails } from "@/pages/ProductDetailsPage/hooks/useUnlikeProductDetails.ts";
import { useSelectedProductDetails } from "@/pages/ProductDetailsPage/hooks/useSelectedProductDetails.ts";
import Selectors from "@/pages/ProductDetailsPage/components/Selectors/Selectors.tsx";
import ProductMainInfo from "@/pages/ProductDetailsPage/components/ProductMainInfo.tsx";
import CartActions from "@/pages/ProductDetailsPage/components/CartActions.tsx";
import ProductSecondaryInfo from "@/pages/ProductDetailsPage/components/ProductSecondaryInfo.tsx";
import ProductDetailsFooter from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/ProductDetailsFooter.tsx";
import ImageGallery from "@/pages/ProductDetailsPage/components/ImageGallery/ImageGallery.tsx";
import { useCurrentCartItemInfo } from "@/pages/ProductDetailsPage/hooks/useCurrentCartItemInfo.ts";
import { useAddToCart } from "@/pages/ProductDetailsPage/hooks/useAddToCart.ts";

export default function ProductDetailsPage() {
    const { productId } = useParams() as { productId: string };
    const queryKey = ["product-details", productId];
    const { state } = useLocation();
    const category: Category | null = state?.category;
    const type: Type | null = state?.type;
    const { productDetails } = useLoadProductDetails(productId);
    const { selectedColor, selectedSize, setSelectedColor, setSelectedSize } =
        useSelectedProductDetails(productDetails);
    const { currentCartItemInfo } = useCurrentCartItemInfo(
        productDetails,
        selectedSize,
        selectedColor,
    );

    const { addToCartMutation } = useAddToCart(queryKey);
    const { decreaseCartQuantityMutate } = useDecreaseCartQuantityInProductDetails(queryKey);
    const { increaseCartQuantityMutate } = useIncreaseCartQuantityInProductDetails(queryKey);
    const { unlikeProductDetailsMutate } = useUnlikeProductDetails(queryKey);
    const { likeProductDetailsMutate } = useLikeProductDetails(queryKey);

    function increaseCartQuantity() {
        if (!currentCartItemInfo) return;

        increaseCartQuantityMutate(currentCartItemInfo.cartItemId);
    }

    function addToCart() {
        if (!selectedColor || !selectedSize) return;

        addToCartMutation.mutate({ size: selectedSize, color: selectedColor, productId });
    }

    function decreaseCartQuantity() {
        if (!currentCartItemInfo) return;

        decreaseCartQuantityMutate(currentCartItemInfo.cartItemId);
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
                        addingToCartPending={addToCartMutation.isPending}
                        quantityInCart={currentCartItemInfo?.quantityInCart ?? 0}
                        addToCart={addToCart}
                        decreaseCartQuantity={decreaseCartQuantity}
                        increaseCartQuantity={increaseCartQuantity}
                        likeProduct={() => likeProductDetailsMutate(productId)}
                        unlikeProduct={() => unlikeProductDetailsMutate(productId)}
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
