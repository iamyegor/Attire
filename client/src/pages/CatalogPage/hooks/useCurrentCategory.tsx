import { useEffect, useState } from "react";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import useAttireContext from "@/context/useAttireContext.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";

export default function useCurrentCategory(path: string | null) {
    const [category, setCategory] = useState<Category | null>(null);
    const [type, setType] = useState<Type | null>(null);
    const { menCategories, womenCategories, newCategories } = useAttireContext();

    useEffect(() => {
        if (path == null) {
            setCategory(null);
            return;
        }

        let category: Category | null =
            menCategories.find((category) => category.path === path) ?? null;
        if (category) {
            setCategory(category);
            return;
        }

        category = womenCategories.find((category) => category.path === path) ?? null;
        if (category) {
            setCategory(category);
            return;
        }

        category = newCategories.find((category) => category.path === path) ?? null;
        if (category) {
            setCategory(category);
            return;
        }

        setCategory(null);
    }, [path, womenCategories.length, menCategories.length, newCategories.length]);

    useEffect(() => {
        if (path) {
            setType(Type.createBasedOnPath(path));
        }
    }, [path]);

    return {category, type};
}
