import Color from "@/types/Color.ts";
import ColorButton from "@/components/ui/ColorButton.tsx";
import SizeChart from "@/pages/ProductDetailsPage/components/Selectors/SizeChart.tsx";
import SelectionButton from "@/pages/CatalogPage/components/FilterComponent/FilterDrawer/SelectionButton.tsx";

interface SelectorsProps {
    colors: Color[];
    selectedColor: string | null;
    setSelectedColor: (color: string) => void;
    sizes: string[];
    selectedSize: string | null;
    setSelectedSize: (size: string) => void;
}

export default function Selectors({
    colors,
    selectedColor,
    setSelectedColor,
    sizes,
    selectedSize,
    setSelectedSize,
}: SelectorsProps) {
    return (
        <>
            <div className="flex gap-x-3.5">
                {colors.map((color) => (
                    <ColorButton
                        key={color.name}
                        color={color}
                        isSelected={selectedColor === color.name}
                        onClick={() => setSelectedColor(color.name)}
                    />
                ))}
            </div>
            <div className="flex items-center justify-between mt-4">
                <p className="font-medium text-lg">Размер</p>
                <SizeChart />
            </div>
            <div className="flex space-x-2">
                {sizes.map((size) => (
                    <SelectionButton
                        key={size}
                        label={size}
                        isSelected={selectedSize === size}
                        onClick={() => setSelectedSize(size)}
                    />
                ))}
            </div>
        </>
    );
}
