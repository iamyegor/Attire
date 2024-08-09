interface ColorButtonProps {
    colorName: string;
    colorHex: string;
    isSelected: boolean;
    onClick: () => void;
}

export default function ColorButton({
    colorName,
    colorHex,
    isSelected,
    onClick,
}: ColorButtonProps) {
    return (
        <button
            className={`mr-2 mb-2 w-8 h-8 rounded-full border-2 focus:outline-none ring-2 ring-offset-2 ${isSelected ? "ring-blue-500" : "ring-gray-300"}`}
            style={{ backgroundColor: colorHex, borderColor: colorHex }}
            aria-label={`Select color ${colorName}`}
            onClick={onClick}
        ></button>
    );
}
