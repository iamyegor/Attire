import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import api from "@/lib/api.ts";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export default function useLoadCategories() {
    const { data: menCategoriesRu = [] } = useQuery<Category[]>({
        queryKey: ["men-categories"],
        queryFn: fetchMenCategories,
    });

    const { data: womenCategoriesRu = [] } = useQuery<Category[]>({
        queryKey: ["women-categories"],
        queryFn: fetchWomenCategories,
    });

    async function fetchMenCategories() {
        const { data } = await api.get("categories/male");
        return data;
    }

    async function fetchWomenCategories() {
        const { data } = await api.get("categories/female");
        return data;
    }

    const newCategoriesRu = useMemo(() => {
        const newMaleCategory: Category = {
            id: "25a5e11f-ca7a-43f4-94be-e9fb3a6c25f5",
            name: "Мужчинам",
        };
        const newFemaleCategory: Category = {
            id: "bdbb429c-a070-409d-974b-03c45a22f686",
            name: "Женщинам",
        };
        return [newMaleCategory, newFemaleCategory];
    }, []);

    return { menCategoriesRu, womenCategoriesRu, newCategoriesRu };
}
