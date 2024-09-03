import QuantityButton from "@/pages/CartPage/components/CartItemCard/QuantityButton.tsx";
import CartItem from "@/pages/CartPage/types/CartItem.ts";
import ChangeCartQuantityData from "@/types/ChangeCartQuantityData.ts";

interface CartItemQuantityControlProps {
    className?: string;
    item: CartItem;
    changeCartQuantity: (data: ChangeCartQuantityData) => void;
}

export default function CartItemQuantityControl({
    className,
    item,
    changeCartQuantity,
}: CartItemQuantityControlProps) {
    return (
        <div className={`flex items-center gap-x-1`}>
            <QuantityButton
                className={className}
                label="-"
                isDisabled={item.quantity === 1}
                onClick={() =>
                    changeCartQuantity({ cartItemId: item.id, newQuantity: item.quantity - 1 })
                }
            />
            <span className="w-10 text-center">{item.quantity}</span>
            <QuantityButton
                className={className}
                label="+"
                isDisabled={item.quantity === 99}
                onClick={() =>
                    changeCartQuantity({ cartItemId: item.id, newQuantity: item.quantity + 1 })
                }
            />
        </div>
    );
}
