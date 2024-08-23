import { useLoadCart } from "@/pages/CartPage/hooks/useLoadCart.ts";
import OrderSummary from "@/pages/CartPage/components/OrderSummary.tsx";
import Checkbox from "@/pages/CartPage/components/Checkbox.tsx";
import useSelectedItems from "@/pages/CartPage/hooks/useSelectedItems.ts";
import { useDeleteCartItem } from "@/pages/CartPage/hooks/useDeleteCartItem.ts";
import CartItemCard from "@/pages/CartPage/components/CartItemCard.tsx";
import EmptyCartSvg from "@/assets/empty-cart.svg?react";
import CartPageSkeleton from "@/pages/CartPage/components/CartPageSkeleton.tsx";
import useChangeCartQuantityInCart from "@/pages/CartPage/hooks/useChangeCartQuantityInCart.ts";

export default function CartPage() {
    const queryKey = ["cart"];
    const { cartItems, isLoading } = useLoadCart(queryKey);
    const { selectedItems, toggleSelect, toggleSelectAll } = useSelectedItems(cartItems);

    const { changeCartQuantityMutate } = useChangeCartQuantityInCart(queryKey);
    const { deleteCartItemMutate } = useDeleteCartItem(queryKey);

    const selectedTotalPrice = cartItems.reduce((sum, item) => {
        return selectedItems.includes(item.id) ? sum + item.productPrice * item.quantity : sum;
    }, 0);

    return (
        <div className="flex flex-col lg:flex-row container mx-auto space-y-6 lg:space-y-0 lg:space-x-6 max-w-screen-xl px-4 pb-8 h-full">
            {isLoading ? (
                <CartPageSkeleton />
            ) : (
                <>
                    <div className="bg-neutral-200 w-full rounded-2xl p-6 space-y-4 h-min">
                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold text-black text-2xl">Корзина</h2>
                            <span className="font-normal text-neutral-500">
                                товары ({cartItems.length})
                            </span>
                        </div>

                        {cartItems.length > 0 ? (
                            <>
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
                                            key={item.id}
                                            item={item}
                                            changeCartQuantity={changeCartQuantityMutate}
                                            deleteCartItem={deleteCartItemMutate}
                                            isSelected={selectedItems.includes(item.id)}
                                            onSelectClick={() => toggleSelect(item.id)}
                                        />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="flex justify-center items-center py-8 space-x-6">
                                <EmptyCartSvg className="w-8 h-8 transform scale-x-[-1]" />
                                <h2 className="text-2xl font-medium">Корзина пуста</h2>
                            </div>
                        )}
                    </div>
                    <OrderSummary
                        selectedItems={selectedItems.length}
                        totalPrice={selectedTotalPrice}
                    />
                </>
            )}
        </div>
    );
}
