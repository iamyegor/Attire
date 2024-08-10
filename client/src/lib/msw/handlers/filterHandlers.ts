import { http, HttpResponse } from "msw";
import FiltersResponse from "@/pages/CatalogPage/components/FilterComponent/types/FiltersResponse.ts";

const filters: FiltersResponse = {
    sizes: ["25", "26", "27"],
    colors: [
        {
            name: "белый",
            hex: "#fff",
        },
        {
            name: "чёрный",
            hex: "#000",
        },
    ],
    compositions: ["нейлон", "полиэстер", "хлопок"],
    minPrice: 9000,
    maxPrice: 12000,
};

export const filterHandlers = [
    http.get("*/categories/*/products/filter", async () => {
        return HttpResponse.json(filters);
    }),
];
