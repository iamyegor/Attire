import React, { createContext, useEffect, useState } from "react";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import useLoadCategories from "@/components/RootLayout/Header/BurgerMenu/hooks/useLoadCategories.ts";
import useLanguageDetection, { Language } from "@/components/RootLayout/hooks/useLanguageDetection";
import translateCatergoriesToEnglish from "./utils/translateCatergoriesToEnglish";

export interface AttireContextProps {
    menCategories: Category[];
    womenCategories: Category[];
    newCategories: Category[];
    uiLanguage: Language;
}

export const AttireContext = createContext<AttireContextProps | null>(null);

export default function AttireProvider({ children }: { children: React.ReactNode }) {
    const [menCategories, setMenCategories] = useState<Category[]>([]);
    const [womenCategories, setWomenCategories] = useState<Category[]>([]);
    const [newCategories, setNewCategories] = useState<Category[]>([]);
    const { uiLanguage } = useLanguageDetection();
    const { menCategoriesRu, womenCategoriesRu, newCategoriesRu } = useLoadCategories();

    useEffect(() => {
        if (uiLanguage === "ru") {
            setMenCategories(menCategoriesRu);
            setWomenCategories(womenCategoriesRu);
            // setNewCategories(newCategoriesRu);
        } else {
            const translatedCategories = translateCatergoriesToEnglish({
                menCategoriesRu,
                womenCategoriesRu,
                newCategoriesRu,
            });

            setMenCategories(translatedCategories.menCategories);
            setWomenCategories(translatedCategories.womenCategories);
            // setNewCategories(translatedCategories.newCategories);
        }
    }, [menCategoriesRu.length, womenCategoriesRu.length, newCategoriesRu.length, uiLanguage]);

    return (
        <AttireContext.Provider
            value={{ menCategories, womenCategories, newCategories, uiLanguage }}
        >
            {children}
        </AttireContext.Provider>
    );
}
