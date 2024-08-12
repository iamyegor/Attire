import Color from "@/types/Color.ts";

export default interface FiltersResponse {
    sizes: string[];
    colors: Color[];
    compositions: string[];
    minPrice: number;
    maxPrice: number;
}
