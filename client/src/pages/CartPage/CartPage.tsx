import { useLoadCart } from "@/pages/CartPage/hooks/useLoadCart.ts";
import OrderSummary from "@/pages/CartPage/components/OrderSummary/OrderSummary";
import Checkbox from "@/pages/CartPage/components/Checkbox.tsx";
import useSelectedItems from "@/pages/CartPage/hooks/useSelectedItems.ts";
import { useDeleteCartItem } from "@/pages/CartPage/hooks/useDeleteCartItem.ts";
import CartItemCard from "@/pages/CartPage/components/CartItemCard/CartItemCard";
import EmptyCartSvg from "@/assets/empty-cart.svg?react";
import CartPageSkeleton from "@/pages/CartPage/components/CartPageSkeleton.tsx";
import useChangeCartQuantityInCart from "@/pages/CartPage/hooks/useChangeCartQuantityInCart.ts";
import useCartTranslation from "./hooks/useCartTranslation";

export default function CartPage() {
    const queryKey = ["cart"];
    const { cartItems, isLoading } = useLoadCart(queryKey);
    const { selectedItems, toggleSelect, toggleSelectAll } = useSelectedItems(cartItems);
    const { changeCartQuantityMutate } = useChangeCartQuantityInCart(queryKey);
    const { deleteCartItemMutate } = useDeleteCartItem(queryKey);
    const t = useCartTranslation();

    const selectedTotalPrice = cartItems.reduce((sum, item) => {
        return selectedItems.includes(item.id) ? sum + item.productPrice * item.quantity : sum;
    }, 0);

    return (
        <div className="flex flex-col lg:flex-row sm:container sm:px-4 mx-auto space-y-4 lg:space-y-0 lg:space-x-6 max-w-screen-xl pb-2 h-full">
            {isLoading ? (
                <CartPageSkeleton />
            ) : (
                <>
                    <div className="bg-neutral-200 w-full rounded-[1.75rem] sm:rounded-2xl p-4 sm:p-6 space-y-4 h-min">
                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold text-black text-2xl">{t.cart}</h2>
                            <span className="font-normal text-neutral-500">
                                {t.items} ({cartItems.length})
                            </span>
                        </div>

                        {cartItems.length > 0 ? (
                            <>
                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id="select-all"
                                        isChecked={selectedItems.length == cartItems.length}
                                        onClick={toggleSelectAll}
                                    />
                                    <label htmlFor="select-all" className="hover:cursor-pointer">
                                        {t.selectAllItems}
                                    </label>
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
                                <h2 className="text-2xl font-medium">{t.emptyCart}</h2>
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
