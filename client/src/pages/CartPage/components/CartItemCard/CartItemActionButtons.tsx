import IconButton from "@/pages/CartPage/components/CartItemCard/IconButton.tsx";
import TrashSvg from "@/assets/trash.svg?react";
import ShareSvg from "@/assets/share.svg?react";

interface CartItemActionsProps {
    onLinkCopied: () => void;
    itemId: string;
    deleteCartItem: (id: string) => void;
}

export default function CartItemActions({
    onLinkCopied,
    itemId,
    deleteCartItem,
}: CartItemActionsProps) {
    return (
        <div className="flex gap-x-3 sm:gap-x-2 items-center">
            <IconButton onClick={onLinkCopied}>
                <ShareSvg className="w-full h-full" />
            </IconButton>
            <IconButton onClick={() => deleteCartItem(itemId)}>
                <TrashSvg className="w-full h-full" />
            </IconButton>
        </div>
    );
}
