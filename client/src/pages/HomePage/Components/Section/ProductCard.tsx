import { Link } from "react-router-dom";
import Product from "@/types/Product.ts";
import React from "react";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import LikeButton from "@/components/ui/LikeButton.tsx";

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
    function handleLikeButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        if (product.isFavorite) {
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
            style={{ aspectRatio: "9/16" }}
            draggable={false}
        >
            <img
                className="w-full object-cover rounded-lg"
                src={product.imageSrc}
                alt={product.description}
                style={{ userSelect: "none" }}
                draggable={false}
            />
            <div
                className="p-3 px-0 flex flex-col justify-start h-[90px]"
                style={{ userSelect: "none" }}
            >
                <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-900">{product.price} ₽</p>
                    <LikeButton
                        isLiked={product.isFavorite}
                        className="w-7 h-7"
                        onClick={handleLikeButtonClick}
                    />
                </div>
                <p className="mt-1 text-gray-700 line-clamp-2 text-left">{product.description}</p>
            </div>
        </Link>
    );
}
