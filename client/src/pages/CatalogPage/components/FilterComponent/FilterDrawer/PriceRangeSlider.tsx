import { Slider } from "@mui/material";

interface PriceRangeSliderProps {
    minPrice: number;
    maxPrice: number;
    priceRange: number[];
    onChange: (event: Event, newValue: number | number[]) => void;
}

export default function PriceRangeSlider({ minPrice, maxPrice, priceRange, onChange }: PriceRangeSliderProps) {
    return (
        <div>
            <h3 className="font-semibold mb-3 text-lg text-gray-800">Диапазон цены</h3>
            <Slider
                getAriaLabel={() => "Price range"}
                value={priceRange}
                onChange={onChange}
                valueLabelDisplay="auto"
                min={minPrice}
                step={100}
                max={maxPrice}
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
                <p>{priceRange[0]}₽</p>
                <p>{priceRange[1]}₽</p>
            </div>
        </div>
    );
}
