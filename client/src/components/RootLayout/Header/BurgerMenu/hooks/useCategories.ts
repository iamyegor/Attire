import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import api from "@/lib/api.ts";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export default function useCategories() {
    const { data: menCategories = [] } = useQuery<Category[]>({
        queryKey: ["men-categories"],
        queryFn: fetchMenCategories,
    });

    const { data: womenCategories = [] } = useQuery<Category[]>({
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

    const newCategories = useMemo(() => {
        const newMaleCategory: Category = { id: "", name: "Мужчинам", path: "new/men" };
        const newFemaleCategory: Category = { id: "", name: "Женщинам", path: "new/women" };
        return [newMaleCategory, newFemaleCategory];
    }, []);

    return { menCategories, womenCategories, newCategories };
}
