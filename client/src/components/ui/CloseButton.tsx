import CrossSvg from "@/assets/black-cross.svg?react";

interface CloseButtonProps {
    onClose: () => void;
}

export default function CloseButton({ onClose }: CloseButtonProps) {
    return (
        <button
            className="absolute top-3 right-3 flex-shrink-0 border-transparent border-4 text-neutral-700 py-1 px-2 rounded font-medium"
            onClick={onClose}
        >
            <CrossSvg className="w-8 h-8 fill-neutral-700" />
        </button>
    );
}
