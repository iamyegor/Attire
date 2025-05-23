import React from "react";

export default function IconButton({
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <button
            className="p-1.5 flex items-center justify-center bg-neutral-200 rounded-md h-7 w-7"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
