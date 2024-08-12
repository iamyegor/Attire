import LikeButton from "@/components/ui/LikeButton.tsx";
import { Link } from "react-router-dom";

interface CartActionsProps {
    quantityInCart: number;
    decreaseCartQuantity: () => void;
    increaseCartQuantity: () => void;
    isLiked: boolean;
    likeProduct: () => void;
    unlikeProduct: () => void;
}

export default function CartActions({
    quantityInCart,
    decreaseCartQuantity,
    increaseCartQuantity,
    isLiked,
    likeProduct,
    unlikeProduct,
}: CartActionsProps) {
    function toggleLike() {
        if (isLiked) {
            likeProduct();
        } else {
            unlikeProduct();
        }
    }

    return (
        <div className="flex items-center space-x-4">
            {quantityInCart === 0 ? (
                <button
                    onClick={increaseCartQuantity}
                    className="px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition-all"
                >
                    Добавить в корзину
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
