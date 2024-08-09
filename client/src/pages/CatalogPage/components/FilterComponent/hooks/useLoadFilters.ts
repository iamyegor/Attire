import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import { useQuery } from "@tanstack/react-query";
import FiltersResponse from "@/pages/CatalogPage/components/FilterComponent/types/FiltersResponse.ts";
import api from "@/lib/api.ts";

export function useLoadFilters(category: Category) {
    return useQuery<FiltersResponse, Error>({
        queryKey: ["filterData", category],
        queryFn: fetchFilters,
    });

    async function fetchFilters() {
        const response = await api.get(`categories/${category.id}/products/filter`);
        return response.data;
    }
}
