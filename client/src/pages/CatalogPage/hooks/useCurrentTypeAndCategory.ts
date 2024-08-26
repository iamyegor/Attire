import { useEffect, useMemo, useState } from "react";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import useAttireContext from "@/context/useAttireContext.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";

export default function useCurrentTypeAndCategory(path: string | null) {
    const [category, setCategory] = useState<Category | null>(null);
    const [type, setType] = useState<Type | null>(null);
    const { menCategories, womenCategories, newCategories } = useAttireContext();
    const allCategories = useMemo(
        () => menCategories.concat(newCategories).concat(womenCategories),
        [menCategories, newCategories, womenCategories],
    );

    useEffect(() => {
        if (path === null) {
            setType(null);
            setCategory(null);
            return;
        }

        const typeInPath = path.split("/")[0] ?? null;
        const categoryId: string | null = path.split("/")[1] ?? null;

        setType(Type.createBasedOnPath(typeInPath));

        let category: Category | null =
            allCategories.find((category) => category.id === categoryId) ?? null;
        setCategory(category ?? null);
    }, [path, allCategories]);

    return { category, type };
}
