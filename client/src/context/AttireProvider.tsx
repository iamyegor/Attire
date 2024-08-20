import React, { createContext } from "react";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import useLoadCategories from "@/components/RootLayout/Header/BurgerMenu/hooks/useLoadCategories.ts";

export interface AttireContextProps {
    menCategories: Category[];
    womenCategories: Category[];
    newCategories: Category[];
}

export const AttireContext = createContext<AttireContextProps | null>(null);

export default function AttireProvider({ children }: { children: React.ReactNode }) {
    const { menCategories, womenCategories, newCategories } = useLoadCategories();

    return (
        <AttireContext.Provider value={{ menCategories, womenCategories, newCategories }}>
            {children}
        </AttireContext.Provider>
    );
}
