import EmptyHeartIcon from "@/assets/heart.svg?react";
import RedHeartIcon from "@/assets/heart-red.svg?react";
import { Link } from "react-router-dom";
import Product from "@/types/Product.ts";
import React from "react";

interface ProductCardProps {
    product: Product;
    makeProductFavorite: (productId: string) => void;
    unmakeProductFavorite: (productId: string) => void;
}

export default function ProductCard({
    product,
    makeProductFavorite,
    unmakeProductFavorite,
}: ProductCardProps) {
    function handleLikeButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        if (product.isFavorite) {
            unmakeProductFavorite(product.id);
        } else {
            makeProductFavorite(product.id);
        }
    }

    return (
        <Link
            className="w-full max-w-[255px] sm:hover:bg-neutral-100 p-4 pb-0 rounded-xl group flex-shrink-0"
            to={`/products/${product.id}}`}
            draggable={false}
        >
            <div
                className="flex flex-col bg-white rounded-lg sm:group-hover:bg-neutral-100"
                draggable={false}
            >
                <img
                    className="xs:h-[790px] sm:h-[340px] w-full object-cover rounded-lg"
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
                        <button
                            className="hover:cursor-pointer w-7 h-7 hover:scale-110 transition"
                            onClick={(e) => handleLikeButtonClick(e)}
                        >
                            {product.isFavorite ? (
                                <RedHeartIcon className="w-[90%] h-[90%]" />
                            ) : (
                                <EmptyHeartIcon className="w-[90%] h-[90%]" />
                            )}
                        </button>
                    </div>
                    <p className="mt-1 text-gray-700 line-clamp-2 text-left">
                        {product.description}
                    </p>
                </div>
            </div>
        </Link>
    );
}
