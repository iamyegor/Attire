import { useLocation, useParams } from "react-router-dom";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import Breadcrumbs from "@/pages/CatalogPage/components/Breadcrumbs.tsx";
import React, { useState } from "react";
import { useLoadProductDetails } from "@/pages/ProductDetailsPage/hooks/useLoadProductDetails.ts";
import { useChangeProductDetailsCartQuantity } from "@/pages/ProductDetailsPage/hooks/useChangeProductDetailsCartQuantity.ts";
import { useLikeProductDetails } from "@/pages/ProductDetailsPage/hooks/useLikeProductDetails.ts";
import { useUnlikeProductDetails } from "@/pages/ProductDetailsPage/hooks/useUnlikeProductDetails.ts";
import { useSelectedProductDetails } from "@/pages/ProductDetailsPage/hooks/useSelectedProductDetails.ts";
import Selectors from "@/pages/ProductDetailsPage/components/Selectors/Selectors.tsx";
import ProductMainInfo from "@/pages/ProductDetailsPage/components/ProductMainInfo.tsx";
import ProductDetailsActions from "@/pages/ProductDetailsPage/components/ProductDetailsActions.tsx";
import ProductSecondaryInfo from "@/pages/ProductDetailsPage/components/ProductSecondaryInfo.tsx";
import ProductDetailsFooter from "@/pages/ProductDetailsPage/components/ProductDetailsFooter/ProductDetailsFooter.tsx";
import ProductDetailsImageGallery from "@/pages/ProductDetailsPage/components/ImageGallery/ProductDetailsImageGallery.tsx";
import { useCurrentCartItemInfo } from "@/pages/ProductDetailsPage/hooks/useCurrentCartItemInfo.ts";
import { useAddToCart } from "@/pages/ProductDetailsPage/hooks/useAddToCart.ts";
import "ldrs/lineSpinner";
import LoginModal from "@/components/ui/LoginModal.tsx";
import useDeleteProductDetailsCartItem from "@/pages/ProductDetailsPage/hooks/useDeleteProductDetailsCartItem.ts";

export default function ProductDetailsPage() {
    const { productId } = useParams() as { productId: string };
    const queryKey = ["product-details", productId];
    const { state } = useLocation();
    const category: Category | null = state?.category;
    const type: Type | null = state?.type;
    const { productDetails, isLoading } = useLoadProductDetails(productId);
    const { selectedColor, selectedSize, setSelectedColor, setSelectedSize } =
        useSelectedProductDetails(productDetails);
    const { currentCartItemInfo } = useCurrentCartItemInfo(
        productDetails,
        selectedSize,
        selectedColor,
    );

    const [loginModalType, setLoginModalType] = useState<"like" | "cart" | null>(null);
    const { addToCartMutation } = useAddToCart(queryKey, () => setLoginModalType("cart"));
    const { changeCartQuantityMutate } = useChangeProductDetailsCartQuantity(queryKey);
    const { deleteCartItemMutate } = useDeleteProductDetailsCartItem(queryKey);
    const { likeProductDetailsMutate } = useLikeProductDetails(queryKey, () =>
        setLoginModalType("like"),
    );
    const { unlikeProductDetailsMutate } = useUnlikeProductDetails(queryKey, () =>
        setLoginModalType("like"),
    );

    function addToCart() {
        if (!selectedColor || !selectedSize) return;

        addToCartMutation.mutate({ size: selectedSize, color: selectedColor, productId });
    }

    function changeCartQuantity(newQuantity: number) {
        if (!currentCartItemInfo) return;

        changeCartQuantityMutate({ cartItemId: currentCartItemInfo.cartItemId, newQuantity });
    }

    if (isLoading) {
        return (
            <div className="flex w-full h-full justify-center items-center">
                <l-line-spinner color="rgb(59 130 246)" size="45" />
            </div>
        );
    }

    if (!productDetails) {
        return (
            <div className="flex space-y-2 flex-col w-full h-full justify-center items-center text-3xl">
                <p>¯\_(ツ)_/¯</p>
                <p className="font-medium">Не удалось загрузить товар</p>
            </div>
        );
    }

    return (
        <div className="bg-white text-gray-900 font-sans leading-relaxed pb-10">
            <LoginModal
                isLoginModalShown={loginModalType !== null}
                hideLoginModal={() => setLoginModalType(null)}
                type={loginModalType!}
            />
            <Breadcrumbs type={type} category={category} productName={productDetails?.title} />
            <div className="p-4 flex flex-col md:flex-row items-start md:space-x-8 space-y-6 md:space-y-0">
                <ProductDetailsImageGallery images={productDetails.imagePaths} />

                <div className="w-full md:flex-1 lg:flex-none lg:w-[350px] xl:w-[420px] space-y-5">
                    <ProductMainInfo name={productDetails.title} price={productDetails.price} />
                    <Selectors
                        colors={productDetails.colors}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                        sizes={productDetails.sizes}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                    />
                    <ProductDetailsActions
                        addingToCartPending={addToCartMutation.isPending}
                        deleteCartItem={deleteCartItemMutate}
                        quantityInCart={currentCartItemInfo?.quantityInCart ?? 0}
                        cartItemId={currentCartItemInfo?.cartItemId ?? null}
                        changeCartQuantity={changeCartQuantity}
                        addToCart={addToCart}
                        likeProduct={() => likeProductDetailsMutate(productId)}
                        unlikeProduct={() => unlikeProductDetailsMutate(productId)}
                        isLiked={productDetails.liked}
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
