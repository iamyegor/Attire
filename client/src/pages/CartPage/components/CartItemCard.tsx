import React, { useState } from "react";
import TrashSvg from "@/assets/trash.svg?react";
import ShareSvg from "@/assets/share.svg?react";
import CartItem from "@/pages/CartPage/types/CartItem.ts";
import { Link } from "react-router-dom";
import LinkCopiedNotification from "@/pages/CartPage/components/LinkCopiedNotification.tsx";
import QuantityButton from "@/pages/CartPage/components/CartItemCard/QuantityButton.tsx";
import IconButton from "@/pages/CartPage/components/CartItemCard/IconButton.tsx";
import Checkbox from "@/pages/CartPage/components/Checkbox.tsx";

interface CartItemProps {
    item: CartItem;
    isSelected: boolean;
    onSelectClick: () => void;
    decreaseCartQuantity: (id: string) => void;
    increaseCartQuantity: (id: string) => void;
    deleteCartItem: (id: string) => void;
}

export default function CartItemCard({
    item,
    isSelected,
    onSelectClick,
    decreaseCartQuantity,
    increaseCartQuantity,
    deleteCartItem,
}: CartItemProps) {
    const [linkCopied, setLinkCopied] = useState(false);

    return (
        <div className="h-[195px] flex flex-col md:flex-row justify-between text-sm xs:text-base bg-white rounded-2xl p-4 group">
            <div className="flex flex-1 md:h-full md:items-center w-full space-x-4">
                <div
                    className="h-[120px] md:h-full bg-[#c7c7c7] rounded-2xl flex items-center justify-center relative"
                    style={{ aspectRatio: "10/16" }}
                >
                    <Checkbox
                        isChecked={isSelected}
                        onClick={onSelectClick}
                        className={`absolute top-2 left-2 ${isSelected ? "opacity-100" : "lg:opacity-0"} group-hover:opacity-100 transition-opacity`}
                    />
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-full rounded-lg select-none"
                        draggable={false}
                    />
                </div>
                <div className="flex flex-col justify-between h-full w-full">
                    <div className="space-y-1">
                        <p className="block sm:hidden font-medium text-medium">
                            {item.productPrice * item.quantity} ₽
                        </p>
                        <Link
                            to={`/products/${item.productId}`}
                            className="line-clamp-2 font-medium"
                        >
                            {item.name}
                        </Link>
                        <p className="text-[#5b5b5b] line-clamp-2 text-xs xs:text-base">
                            артикул <span className="font-medium">{item.sku}</span>
                        </p>
                        <p className="flex items-center space-x-1.5">
                            <span>{item.size}</span>
                            <span>|</span>
                            <div
                                className={`w-4 h-4 rounded-full ring-1 ring-offset-1 ring-neutral-300`}
                                style={{ backgroundColor: item.color.hex }}
                            ></div>
                            <span>{item.color.name}</span>
                        </p>
                    </div>
                    <div className="hidden md:flex space-x-1 justify-between pt-2">
                        <div className="flex space-x-1">
                            <IconButton onClick={() => setLinkCopied(true)}>
                                <ShareSvg className="w-4 h-4" />
                            </IconButton>
                            <LinkCopiedNotification
                                isOpen={linkCopied}
                                onClose={() => setLinkCopied(false)}
                            />
                            <IconButton onClick={() => deleteCartItem(item.id)}>
                                <TrashSvg className="w-4 h-4" />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-end space-y-2 h-full">
                    <div className="flex items-center space-x-3">
                        <QuantityButton
                            label="-"
                            isDisabled={item.quantity === 1}
                            onClick={() => decreaseCartQuantity(item.id)}
                        />
                        <span className="w-10 text-center">{item.quantity}</span>
                        <QuantityButton
                            label="+"
                            isDisabled={item.quantity === 99}
                            onClick={() => increaseCartQuantity(item.id)}
                        />
                    </div>
                    <span className="font-medium text-black">
                        {item.productPrice * item.quantity} ₽
                    </span>
                </div>
            </div>

            <div className="flex md:hidden justify-between">
                <div className="flex space-x-1">
                    <IconButton onClick={() => setLinkCopied(true)}>
                        <ShareSvg className="w-4 h-4" />
                    </IconButton>
                    <LinkCopiedNotification
                        isOpen={linkCopied}
                        onClose={() => setLinkCopied(false)}
                    />
                    <IconButton onClick={() => deleteCartItem(item.id)}>
                        <TrashSvg className="w-4 h-4" />
                    </IconButton>
                </div>
                <div className="flex items-center space-x-3">
                    <QuantityButton
                        className="!p-0 !px-0.5"
                        label="-"
                        isDisabled={item.quantity === 1}
                        onClick={() => decreaseCartQuantity(item.id)}
                    />
                    <span className="w-10 text-center">{item.quantity}</span>
                    <QuantityButton
                        className="!p-0 !px-0.5"
                        label="+"
                        isDisabled={item.quantity === 99}
                        onClick={() => increaseCartQuantity(item.id)}
                    />
                </div>
            </div>
        </div>
    );
}
