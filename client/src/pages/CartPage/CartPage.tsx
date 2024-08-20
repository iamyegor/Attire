import { useLoadCart } from "@/pages/CartPage/hooks/useLoadCart.ts";
import OrderSummary from "@/pages/CartPage/components/OrderSummary.tsx";
import Checkbox from "@/pages/CartPage/components/Checkbox.tsx";
import useItemSelection from "@/pages/CartPage/hooks/useItemSelection.ts";
import { useIncreaseCartQuantityInCart } from "@/pages/CartPage/hooks/useIncreaseCartQuantityInCart.ts";
import { useDecreaseCartQuantityInCart } from "@/pages/CartPage/hooks/useDecreaseCartQuantityInCart.ts";
import { useDeleteCartItem } from "@/pages/CartPage/hooks/useDeleteCartItem.ts";
import CartItemCard from "@/pages/CartPage/components/CartItemCard.tsx";

export default function CartPage() {
    const queryKey = ["cart"];
    const { cartItems } = useLoadCart(queryKey);
    const { selectedItems, toggleSelect, toggleSelectAll } = useItemSelection(cartItems);

    const { decreaseCartQuantityMutate } = useDecreaseCartQuantityInCart(queryKey);
    const { increaseCartQuantityMutate } = useIncreaseCartQuantityInCart(queryKey);
    const { deleteCartItemMutate } = useDeleteCartItem(queryKey);

    const selectedTotalPrice = cartItems.reduce((sum, item) => {
        return selectedItems.includes(item.id) ? sum + item.productPrice : sum;
    }, 0);

    return (
        <div className="flex flex-col lg:flex-row container mx-auto space-y-6 lg:space-y-0 lg:space-x-6 max-w-screen-xl px-4 pb-8">
            <div className="bg-neutral-200 w-full rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-black text-2xl">Корзина</h2>
                    <span className="font-normal text-neutral-500">
                        товары ({cartItems.length})
                    </span>
                </div>

                <div className="flex items-center space-x-3">
                    <Checkbox
                        isChecked={selectedItems.length == cartItems.length}
                        onClick={toggleSelectAll}
                    />
                    <span>Выбрать все товары</span>
                </div>

                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <CartItemCard
                            key={item.productId}
                            item={item}
                            decreaseCartQuantity={decreaseCartQuantityMutate}
                            increaseCartQuantity={increaseCartQuantityMutate}
                            deleteCartItem={deleteCartItemMutate}
                            isSelected={selectedItems.includes(item.productId)}
                            onSelectClick={() => toggleSelect(item.productId)}
                        />
                    ))}
                </div>
            </div>
            <OrderSummary selectedItems={selectedItems.length} totalPrice={selectedTotalPrice} />
        </div>
    );
}
