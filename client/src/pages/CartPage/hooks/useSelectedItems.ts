import CartItem from "@/pages/CartPage/types/CartItem.ts";
import { useState } from "react";

export default function useSelectedItems(cartItems: CartItem[]) {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    function toggleSelect(id: string) {
        setSelectedItems((prev) => {
            if (selectedItems.includes(id)) {
                return prev.filter((item) => item !== id);
            }
            return [...prev, id];
        });
    }

    function toggleSelectAll() {
        if (selectedItems.length === cartItems.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(cartItems.map((item) => item.id));
        }
    }

    return { selectedItems, toggleSelect, toggleSelectAll };
}
