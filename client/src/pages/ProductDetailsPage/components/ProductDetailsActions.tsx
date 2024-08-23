import LikeButton from "@/components/ui/LikeButton.tsx";
import { Link } from "react-router-dom";
import classNames from "classnames";
import LoadingSpinner from "@/components/ui/LoadingSpinner.tsx";

interface CartActionsProps {
    quantityInCart: number;
    addToCart: () => void;
    changeCartQuantity: (newQuantity: number) => void;
    isLiked: boolean;
    likeProduct: () => void;
    unlikeProduct: () => void;
    addingToCartPending: boolean;
    cartItemId: string | null;
    deleteCartItem: (id: string) => void;
}

export default function ProductDetailsActions({
    cartItemId,
    deleteCartItem,
    addingToCartPending,
    quantityInCart,
    addToCart,
    changeCartQuantity,
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

    function handleMinusClick() {
        if (quantityInCart > 1) {
            changeCartQuantity(quantityInCart - 1);
        } else {
            deleteCartItem(cartItemId!);
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
                        onClick={handleMinusClick}
                        className="w-11 h-11 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                    >
                        -
                    </button>
                    <p className="font-medium">{quantityInCart}</p>
                    <button
                        onClick={() => changeCartQuantity(quantityInCart + 1)}
                        className="w-11 h-11 bg-gray-200 rounded-full hover:bg-gray-300 transition-all"
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
