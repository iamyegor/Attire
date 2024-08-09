import React, { ReactNode } from "react";

export default function SortDropdownButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
    return (
        <button onClick={onClick} className="rounded-lg hover:bg-neutral-200 py-2">
            {children}
        </button>
    );
}
