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
            className={`w-10 h-2 mx-1.5 rounded-full transition duration-300 ease-in-out shadow-md focus:outline-none ${
                isSelected
                    ? "bg-white/80 scale-110" 
                    : "bg-white/30 hover:bg-white/50"
            }`}
            title={`Slide ${index + 1}`}
            aria-label={label}
        />
    );
}
