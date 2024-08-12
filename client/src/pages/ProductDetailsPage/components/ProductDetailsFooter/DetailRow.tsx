import React from "react";

export default function DetailRow({
    label,
    value,
    className,
}: {
    label: string;
    value: string;
    className?: string;
}) {
    return (
        <div className={`flex justify-between items-center mt-1 rounded-lg px-3 p-2 ${className}`}>
            <div className="text-gray-600">{label}</div>
            <div className="text-black">{value}</div>
        </div>
    );
}
