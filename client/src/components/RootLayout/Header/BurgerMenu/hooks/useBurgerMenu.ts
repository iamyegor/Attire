import { useEffect, useState } from "react";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import useAttireContext from "@/context/useAttireContext.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";

export default function useBurgerMenu() {
    const { menCategories, womenCategories, newCategories } = useAttireContext();
    const [selectedType, setSelectedType] = useState<Type | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        if (selectedType === null) {
            setCategories([]);
            return;
        }

        if (selectedType.isMen()) {
            setCategories(menCategories);
        } else if (selectedType.isWomen()) {
            setCategories(womenCategories);
        } else if (selectedType.isNew()) {
            setCategories(newCategories);
        } else {
            setCategories([]);
        }
    }, [selectedType?.name]);

    function selectType(type: Type) {
        setSelectedType(type);
    }

    function clearSelectedType() {
        setSelectedType(null);
    }

    return {
        selectedType,
        categories,
        selectType,
        clearSelectedType,
    };
}
