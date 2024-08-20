import { useEffect, useState } from "react";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import useAttireContext from "@/context/useAttireContext.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";

export default function useCurrentCategory(path: string | null) {
    const [category, setCategory] = useState<Category | null>(null);
    const [type, setType] = useState<Type | null>(null);
    const { menCategories, womenCategories, newCategories } = useAttireContext();

    useEffect(() => {
        const categoryId: string | null = path?.split("/")[1] ?? null;
        if (path === null || categoryId == null) {
            setType(null);
            setCategory(null);
            return;
        }

        const allCategories = menCategories.concat(newCategories).concat(womenCategories);
        let category: Category | null =
            allCategories.find((category) => category.id === categoryId) ?? null;
        if (category) {
            setCategory(category);
        } else {
            throw new Error(`Category with id ${categoryId} not found`);
        }
    }, [path]);

    useEffect(() => {
        if (path) {
            setType(Type.createBasedOnPath(path));
        }
    }, [path]);

    return { category, type };
}
