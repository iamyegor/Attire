import React from "react";

export default function CustomIndicator(
    clickHandler: (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent) => void,
    isSelected: boolean,
    index: number,
    label: string,
) {
    return (
        <button
            type="button"
            onClick={clickHandler}
            className={`w-20 h-2 mx-2 rounded-full transition duration-300 ease-in-out shadow-md focus:outline-none ${
                isSelected
                    ? "bg-neutral-800 scale-110" // Darker gray and slightly larger size for the selected indicator
                    : "bg-neutral-200 hover:bg-neutral-400 focus:ring-2 focus:ring-gray-600"
            }`}
            title={`Slide ${index + 1}`}
            aria-label={label}
        />
    );
}
