import React, { useState } from "react";
import CartItem from "@/pages/CartPage/types/CartItem.ts";
import { Link } from "react-router-dom";
import Checkbox from "@/pages/CartPage/components/Checkbox.tsx";
import CartItemQuantityControl from "@/pages/CartPage/components/CartItemCard/CartItemQuantityControl.tsx";
import CartItemActions from "@/pages/CartPage/components/CartItemCard/CartItemActionButtons.tsx";
import productImageFullPath from "@/utils/productImageFullPath.ts";
import ChangeCartQuantityData from "@/types/ChangeCartQuantityData.ts";
import LinkCopiedNotification from "@/pages/CartPage/components/LinkCopiedNotification.tsx";

interface CartItemProps {
    item: CartItem;
    isSelected: boolean;
    onSelectClick: () => void;
    changeCartQuantity: (data: ChangeCartQuantityData) => void;
    deleteCartItem: (id: string) => void;
}

export default function CartItemCard({
    item,
    isSelected,
    onSelectClick,
    changeCartQuantity,
    deleteCartItem,
}: CartItemProps) {
    const [linkCopied, setLinkCopied] = useState(false);

    async function handleLinkCopied() {
        setLinkCopied(true);
        const productLink = `${window.location.origin}/products/${item.productId}`;
        await navigator.clipboard.writeText(productLink);
    }

    return (
        <div className="flex flex-col md:flex-row justify-between bg-white rounded-2xl p-4 gap-y-4 group">
            <div className="flex flex-1 h-full w-full space-x-4">
                <div
                    className="max-w-[80px] sm:max-w-[110px] md:h-full bg-[#c7c7c7] rounded-2xl flex items-center justify-center relative"
                    style={{ aspectRatio: "10/16" }}
                >
                    <Checkbox
                        isChecked={isSelected}
                        onClick={onSelectClick}
                        className={`absolute top-2 left-2 ${isSelected ? "opacity-100" : "lg:opacity-0"} group-hover:opacity-100 transition-opacity`}
                    />
                    <img
                        src={productImageFullPath(item.imagePath)}
                        alt={item.productTitle}
                        className="h-full rounded-lg select-none object-cover"
                        draggable={false}
                    />
                </div>
                <div className="flex flex-col justify-between flex-grow">
                    <div className="space-y-1">
                        <p className="block md:hidden font-medium text-medium">
                            {item.productPrice * item.quantity} ₽
                        </p>
                        <Link
                            to={`/products/${item.productId}`}
                            className="line-clamp-2 font-medium"
                        >
                            {item.productTitle}
                        </Link>
                        <p className="text-[#5b5b5b] line-clamp-2">
                            артикул <span className="font-medium">{item.sku}</span>
                        </p>
                        <div className="flex items-center space-x-1.5">
                            <span>{item.size}</span>
                            <span>|</span>
                            <div
                                className={`w-4 h-4 rounded-full ring-1 ring-offset-1 ring-neutral-300`}
                                style={{ backgroundColor: item.color.hex }}
                            ></div>
                            <span>{item.color.name}</span>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-1 justify-between pt-2">
                        <CartItemActions
                            itemId={item.id}
                            deleteCartItem={deleteCartItem}
                            onLinkCopied={handleLinkCopied}
                        />
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-end space-y-2 h-full">
                    <CartItemQuantityControl item={item} changeCartQuantity={changeCartQuantity} />
                    <span className="font-medium text-black">
                        {item.productPrice * item.quantity} ₽
                    </span>
                </div>
            </div>

            <div className="flex md:hidden justify-between">
                <CartItemActions
                    itemId={item.id}
                    deleteCartItem={deleteCartItem}
                    onLinkCopied={handleLinkCopied}
                />
                <CartItemQuantityControl
                    item={item}
                    changeCartQuantity={changeCartQuantity}
                    className="!p-0 !px-0.5"
                />
            </div>
            <LinkCopiedNotification isOpen={linkCopied} onClose={() => setLinkCopied(false)} />
        </div>
    );
}
