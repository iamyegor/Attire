import { Link } from "react-router-dom";
import Product from "@/types/Product.ts";
import React from "react";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import LikeButton from "@/components/ui/LikeButton.tsx";
import productImageFullPath from "@/utils/productImageFullPath.ts";
import useProductCardTranslation from "./hooks/useProductCardTranslation";
import formatPrice from "@/utils/formatPrice";
import useAttireContext from "@/context/useAttireContext";

interface ProductCardProps {
    product: Product;
    likeProduct: (productId: string) => void;
    unlikeProduct: (productId: string) => void;
    type?: Type | null;
    category?: Category | null;
}

export default function ProductCard({
    product,
    likeProduct,
    unlikeProduct,
    type = null,
    category = null,
}: ProductCardProps) {
    const { uiLanguage } = useAttireContext();

    function handleLikeButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        if (product.liked) {
            unlikeProduct(product.id);
        } else {
            likeProduct(product.id);
        }
    }

    return (
        <Link
            state={{ type, category }}
            className="flex w-full flex-col bg-white rounded-xl hover:bg-neutral-100 p-4"
            to={`/products/${product.id}`}
            style={{ aspectRatio: "10/16" }}
            draggable={false}
        >
            <img
                className="w-full object-cover rounded-lg h-full"
                src={productImageFullPath(product.imagePath)}
                alt={product.title}
                style={{ userSelect: "none" }}
                draggable={false}
                loading="lazy"
                decoding="async"
            />
            <div
                className="p-3 px-0 flex flex-col justify-start h-[105px]"
                style={{ userSelect: "none" }}
            >
                <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-900">{formatPrice(product.price)}</p>
                    <LikeButton
                        isLiked={product.liked}
                        className="w-7 h-7"
                        onClick={handleLikeButtonClick}
                    />
                </div>
                <p className="mt-1 text-gray-700 line-clamp-2 text-wrap text-left">
                    {uiLanguage === "en" ? product.titleEn : product.title}
                </p>
            </div>
        </Link>
    );
}
