export default interface FiltersResponse {
    sizes: string[];
    colors: { name: string; hex: string }[];
    compositions: string[];
    minPrice: number;
    maxPrice: number;
}