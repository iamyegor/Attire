interface SelectionButtonProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
    className?: string;
}

export default function SelectionButton({ label, isSelected, onClick, className }: SelectionButtonProps) {
    const baseStyle = "mr-2 mb-2 px-3 py-1 rounded-full text-sm font-medium focus:outline-none";
    const selectedStyle = isSelected ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200";

    return (
        <button className={`${baseStyle} ${selectedStyle} ${className}`} onClick={onClick}>
            {label}
        </button>
    );
}
