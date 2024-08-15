import LinkCopiedNotification from "@/pages/CartPage/components/LinkCopiedNotification.tsx";
import IconButton from "@/pages/CartPage/components/CartItemCard/IconButton.tsx";
import TrashSvg from "@/assets/trash.svg?react";
import ShareSvg from "@/assets/share.svg?react";

interface CartItemActionsProps {
    linkCopied: boolean;
    setLinkCopied: (value: boolean) => void;
    itemId: string;
    deleteCartItem: (id: string) => void;
}

export default function CartItemActions({
    linkCopied,
    setLinkCopied,
    itemId,
    deleteCartItem,
}: CartItemActionsProps) {
    return (
        <div className="flex space-x-1">
            <IconButton onClick={() => setLinkCopied(true)}>
                <ShareSvg className="w-4 h-4" />
            </IconButton>
            <LinkCopiedNotification isOpen={linkCopied} onClose={() => setLinkCopied(false)} />
            <IconButton onClick={() => deleteCartItem(itemId)}>
                <TrashSvg className="w-4 h-4" />
            </IconButton>
        </div>
    );
}
