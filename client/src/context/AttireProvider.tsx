import React, { createContext } from "react";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import useCategories from "@/components/RootLayout/Header/BurgerMenu/hooks/useCategories.ts";

export interface AttireContextProps {
    menCategories: Category[];
    womenCategories: Category[];
    newCategories: Category[];
}

export const AttireContext = createContext<AttireContextProps | null>(null);

export default function AttireProvider({ children }: { children: React.ReactNode }) {
    const { menCategories, womenCategories, newCategories } = useCategories();

    return (
        <AttireContext.Provider value={{ menCategories, womenCategories, newCategories }}>
            {children}
        </AttireContext.Provider>
    );
}
