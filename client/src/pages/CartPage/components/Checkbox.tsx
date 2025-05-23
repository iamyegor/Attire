import React from "react";
import CheckSvg from "@/assets/check.svg?react";

interface CheckboxProps {
    id?: string;
    isChecked: boolean;
    onClick: () => void;
    className?: string;
}

export default function Checkbox({ id, isChecked, onClick, className }: CheckboxProps) {
    return (
        <button
            id={id}
            className={`w-[22px] h-[22px] rounded-md flex justify-center items-center cursor-pointer border 
                             ${isChecked ? "bg-blue-500 border-blue-500" : "border-neutral-400"} pl-0.5 pt-0.5 flex-shrink-0 ${className}`}
            onClick={onClick}
            type="button"
        >
            {isChecked && <CheckSvg className="w-full h-full" />}
        </button>
    );
}
