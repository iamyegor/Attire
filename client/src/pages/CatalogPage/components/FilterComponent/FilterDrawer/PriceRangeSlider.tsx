import { Slider } from "@mui/material";
import usePriceRangeSliderTranslation from "./hooks/usePriceRangeSliderTranslation";
import formatPrice from "@/utils/formatPrice";

interface PriceRangeSliderProps {
    minPrice: number;
    maxPrice: number;
    priceRange: number[];
    onChange: (event: Event, newValue: number | number[]) => void;
}

export default function PriceRangeSlider({
    minPrice,
    maxPrice,
    priceRange,
    onChange,
}: PriceRangeSliderProps) {
    const t = usePriceRangeSliderTranslation();

    return (
        <div>
            <h3 className="font-semibold mb-3 text-lg text-gray-800">{t.priceRange}</h3>
            <Slider
                getAriaLabel={() => t.ariaLabel}
                value={priceRange}
                onChange={onChange}
                valueLabelDisplay="auto"
                min={minPrice}
                step={100}
                max={maxPrice}
                valueLabelFormat={(value) => formatPrice(value)}
                sx={{
                    color: "#0a84ff",
                    "& .MuiSlider-thumb": {
                        borderRadius: "50%",
                        backgroundColor: "white",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    },
                    "& .MuiSlider-track": {
                        borderRadius: "2px",
                    },
                }}
            />
            <div className="flex justify-between text-gray-600 mt-2">
                <p>{formatPrice(priceRange[0])}</p>
                <p>{formatPrice(priceRange[1])}</p>
            </div>
        </div>
    );
}
