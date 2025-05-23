import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import BackArrowSvg from "@/assets/back-arrow.svg?react";
import { Link } from "react-router-dom";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import useCategoriesListTranslations from "./hooks/useCategoriesListTranslations";

interface MenuCategoryProps {
    selectedType: Type;
    collections: Category[];
    onBackButtonClick?: () => void;
    closeMenu: () => void;
}

export default function CategoriesList({
    selectedType,
    collections,
    onBackButtonClick,
    closeMenu,
}: MenuCategoryProps) {
    const t = useCategoriesListTranslations();

    return (
        <div className="absolute top-5">
            <button
                className="text-3xl font-medium flex items-center space-x-3"
                onClick={onBackButtonClick}
            >
                <BackArrowSvg className="w-6 h-6 mt-1 transform rotate-180" />
                <span>{t?.back}</span>
            </button>
            <div className="mt-16">
                <h2 className="text-3xl font-medium">
                    <Link to={`/catalog/${selectedType.path}`}>
                        {t !== null ? t[selectedType.path as "men" | "women" | "new"] : ""}
                    </Link>
                </h2>
                <div className="mt-8 space-y-4 flex flex-col ">
                    {collections.map((category, index) => (
                        <button
                            key={index}
                            className="text-xl text-neutral-700 text-left"
                            onClick={closeMenu}
                        >
                            <Link to={`/catalog/${selectedType.path}/${category.id}`}>
                                {category.name}
                            </Link>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
