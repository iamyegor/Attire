import FiltersResponse from "@/pages/CatalogPage/components/FilterComponent/types/FiltersResponse.ts";
import React from "react";
import PriceRangeSlider from "@/pages/CatalogPage/components/FilterComponent/FilterDrawer/PriceRangeSlider.tsx";
import SelectionButton from "@/pages/CatalogPage/components/FilterComponent/FilterDrawer/SelectionButton.tsx";
import ColorButton from "@/pages/CatalogPage/components/FilterComponent/FilterDrawer/ColorButton.tsx";
import useFilters from "@/pages/CatalogPage/components/FilterComponent/FilterDrawer/hooks/useApplyFilters.ts";
import CloseButton from "@/components/ui/CloseButton.tsx";

interface FilterDrawerProps {
    filtersResponse: FiltersResponse;
    closeDrawer: () => void;
}

export default function FilterDrawer({ filtersResponse, closeDrawer }: FilterDrawerProps) {
    const {
        priceRange,
        setPriceRange,
        sizes,
        setSizes,
        colors,
        setColors,
        materials,
        setMaterials,
        applyFilters,
    } = useFilters(filtersResponse.minPrice, filtersResponse.maxPrice);

    function toggleSelection(
        setSelected: React.Dispatch<React.SetStateAction<string[]>>,
        value: string,
    ) {
        setSelected((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((item) => item !== value)
                : [...prevSelected, value],
        );
    }

    function handleApply() {
        closeDrawer();
        applyFilters();
    }

    return (
        <div className="space-y-6 p-4 bg-white rounded-xl">
            <CloseButton onClose={closeDrawer} />
            <div>
                <h3 className="font-semibold mb-3 text-lg text-gray-800">Sizes</h3>
                {filtersResponse.sizes.map((size) => (
                    <SelectionButton
                        key={size}
                        label={size}
                        isSelected={sizes.includes(size)}
                        onClick={() => toggleSelection(setSizes, size)}
                    />
                ))}
            </div>
            <div>
                <h3 className="font-semibold mb-3 text-lg text-gray-800">Colors</h3>
                <div className="flex flex-wrap space-x-1">
                    {filtersResponse.colors.map((color) => (
                        <ColorButton
                            key={color.name}
                            colorName={color.name}
                            colorHex={color.hex}
                            isSelected={colors.includes(color.name)}
                            onClick={() => toggleSelection(setColors, color.name)}
                        />
                    ))}
                </div>
            </div>
            <div>
                <h3 className="font-semibold mb-3 text-lg text-gray-800">Materials</h3>
                <div className="flex flex-wrap">
                    {filtersResponse.compositions.map((material) => (
                        <SelectionButton
                            key={material}
                            label={material}
                            isSelected={materials.includes(material)}
                            onClick={() => toggleSelection(setMaterials, material)}
                        />
                    ))}
                </div>
            </div>
            <PriceRangeSlider
                minPrice={filtersResponse.minPrice}
                maxPrice={filtersResponse.maxPrice}
                priceRange={priceRange}
                onChange={(_, newValue) => setPriceRange(newValue as number[])}
            />
            <div className="pt-4">
                <button
                    onClick={handleApply}
                    className="w-full py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition duration-150 ease-in-out"
                >
                    Применить
                </button>
            </div>
        </div>
    );
}
