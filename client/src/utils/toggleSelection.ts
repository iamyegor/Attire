import React from "react";

export default function toggleSelection(
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
    value: string,
) {
    setSelected((prevSelected) =>
        prevSelected.includes(value)
            ? prevSelected.filter((item) => item !== value)
            : [...prevSelected, value],
    );
}
