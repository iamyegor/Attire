import LikeButton from "@/components/ui/LikeButton.tsx";
import { Link } from "react-router-dom";
import classNames from "classnames";
import LoadingSpinner from "@/components/ui/LoadingSpinner.tsx";

interface CartActionsProps {
    quantityInCart: number;
    addToCart: () => void;
    decreaseCartQuantity: () => void;
    increaseCartQuantity: () => void;
    isLiked: boolean;
    likeProduct: () => void;
    unlikeProduct: () => void;
    addingToCartPending: boolean;
}

export default function CartActions({
    addingToCartPending,
    quantityInCart,
    addToCart,
    decreaseCartQuantity,
    increaseCartQuantity,
    isLiked,
    likeProduct,
    unlikeProduct,
}: CartActionsProps) {
    function toggleLike() {
        if (!isLiked) {
            likeProduct();
        } else {
            unlikeProduct();
        }
    }

    return (
        <div className="flex items-center space-x-4">
            {quantityInCart === 0 ? (
                <button
                    onClick={addToCart}
                    className={classNames(
                        "px-6 py-2 text-white rounded-full shadow transition-all min-w-[200px] flex justify-center",
                        {
                            "bg-neutral-400": addingToCartPending,
                            "bg-blue-500 hover:bg-blue-600": !addingToCartPending,
                        },
                    )}
                    disabled={addingToCartPending}
                >
                    {addingToCartPending ? (
                        <LoadingSpinner height="25" width="25" />
                    ) : (
                        "Добавить в корзину"
                    )}
                </button>
            ) : (
                <div className="flex items-center space-x-2">
                    <Link
                        to="/cart"
                        className="px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition-all"
                    >
                        В корзину
                    </Link>
                    <button
                        onClick={decreaseCartQuantity}
                        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
                    >
                        -
                    </button>
                    <p className="font-medium">{quantityInCart}</p>
                    <button
                        onClick={increaseCartQuantity}
                        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
                    >
                        +
                    </button>
                </div>
            )}
            <LikeButton
                isLiked={isLiked}
                onClick={toggleLike}
                className="w-6 h-6 text-gray-500 hover:text-red-500 transition-all"
            />
        </div>
    );
}
