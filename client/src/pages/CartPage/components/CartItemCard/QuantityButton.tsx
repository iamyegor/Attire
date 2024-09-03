import React from "react";
import classNames from "classnames";

export default function QuantityButton({
    label,
    onClick,
    isDisabled,
    className = "",
}: {
    label: string;
    onClick: () => void;
    isDisabled: boolean;
    className?: string;
}) {
    return (
        <button
            className={classNames(
                "p-1 text-white w-8 h-8 rounded-lg flex items-center justify-center",
                {
                    "bg-blue-500": !isDisabled,
                    "bg-blue-300": isDisabled,
                },
                className,
            )}
            onClick={onClick}
            disabled={isDisabled}
        >
            {label}
        </button>
    );
}
