import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function useFilters(minPrice: number, maxPrice: number) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [sizes, setSizes] = useState<string[]>([]);
    const [colors, setColors] = useState<string[]>([]);
    const [materials, setMaterials] = useState<string[]>([]);

    useEffect(() => {
        const colors = searchParams.get("colors")?.split(",") ?? [];
        const sizes = searchParams.get("sizes")?.split(",") ?? [];
        const materials = searchParams.get("compositions")?.split(",") ?? [];
        const minPrice = searchParams.get("minPrice");
        const maxPrice = searchParams.get("maxPrice");

        if (minPrice && maxPrice) {
            setPriceRange([parseInt(minPrice), parseInt(maxPrice)]);
        }
        setSizes(sizes);
        setColors(colors);
        setMaterials(materials);
    }, [searchParams.toString()]);

    function applyFilters() {
        setSearchParams((prevParams) => {
            prevParams.set("minPrice", priceRange[0].toString());
            prevParams.set("maxPrice", priceRange[1].toString());

            if (sizes.length > 0) {
                prevParams.set("sizes", sizes.join(","));
            } else {
                prevParams.delete("sizes");
            }

            if (colors.length > 0) {
                prevParams.set("colors", colors.join(","));
            } else {
                prevParams.delete("colors");
            }

            if (materials.length > 0) {
                prevParams.set("compositions", materials.join(","));
            } else {
                prevParams.delete("compositions");
            }
            return prevParams;
        });
    }

    return {
        priceRange,
        setPriceRange,
        sizes,
        setSizes,
        colors,
        setColors,
        materials,
        setMaterials,
        applyFilters,
    };
}
