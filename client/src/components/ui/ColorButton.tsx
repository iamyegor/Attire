import Color from "@/types/Color.ts";

interface ColorButtonProps {
    color: Color;
    isSelected: boolean;
    onClick: () => void;
}

export default function ColorButton({ color, isSelected, onClick }: ColorButtonProps) {
    return (
        <button
            className={`mb-2 w-8 h-8 rounded-full ring-2 focus:outline-none ring-offset-2 ${isSelected ? "ring-blue-500" : "ring-gray-300"}`}
            style={{ backgroundColor: color.hex, borderColor: color.hex }}
            aria-label={`Select color ${color.name}`}
            onClick={onClick}
        ></button>
    );
}
