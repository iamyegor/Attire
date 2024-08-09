export interface FilterQueryParams {
    sizes: string[];
    colors: string[];
    materials: string[];
    minPrice: number | null;
    maxPrice: number | null;
}