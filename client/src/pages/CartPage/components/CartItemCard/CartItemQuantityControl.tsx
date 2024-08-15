import QuantityButton from "@/pages/CartPage/components/CartItemCard/QuantityButton.tsx";
import CartItem from "@/pages/CartPage/types/CartItem.ts";

interface CartItemQuantityControlProps {
    className?: string;
    item: CartItem;
    decreaseCartQuantity: (id: string) => void;
    increaseCartQuantity: (id: string) => void;
}

export default function CartItemQuantityControl({
    className,
    item,
    decreaseCartQuantity,
    increaseCartQuantity,
}: CartItemQuantityControlProps) {
    return (
        <div className={`flex items-center space-x-3`}>
            <QuantityButton
                className={className}
                label="-"
                isDisabled={item.quantity === 1}
                onClick={() => decreaseCartQuantity(item.id)}
            />
            <span className="w-10 text-center">{item.quantity}</span>
            <QuantityButton
                className={className}
                label="+"
                isDisabled={item.quantity === 99}
                onClick={() => increaseCartQuantity(item.id)}
            />
        </div>
    );
}
