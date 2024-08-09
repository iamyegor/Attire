import { ReactNode } from "react";
import CheckSvg from "@/assets/check-mark.svg?react";

interface SortDropdownButtonProps {
    onClick: () => void;
    children: ReactNode;
    isSelected: boolean;
}

export default function SortDropdownButton({
    onClick,
    children,
    isSelected,
}: SortDropdownButtonProps) {
    return (
        <button onClick={onClick} className="rounded-lg hover:bg-neutral-200 p-2 flex justify-between items-center">
            {children}
            {isSelected && <CheckSvg className="w-4 h-4 mr-2" />}
        </button>
    );
}
