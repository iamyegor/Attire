import ArrowRightSvg from "@/assets/arrow-right.svg?react";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import useTypesListTranslations from "./hooks/useTypesListTranslations";

interface CategoryListProps {
    onTypeSelect: (type: Type) => void;
}

function TypesList({ onTypeSelect }: CategoryListProps) {
    const t = useTypesListTranslations();

    return (
        <div className="space-y-8 pt-24">
            <button
                className="text-3xl font-medium flex items-center space-x-3"
                onClick={() => onTypeSelect(Type.Men)}
            >
                <span>{t?.men}</span>
                <ArrowRightSvg className="w-6 h-6 mt-1" />
            </button>
            <button
                className="text-3xl font-medium flex items-center space-x-3"
                onClick={() => onTypeSelect(Type.Women)}
            >
                <span>{t?.women}</span>
                <ArrowRightSvg className="w-6 h-6 mt-1" />
            </button>
            <button
                className="text-3xl font-medium flex items-center space-x-3"
                onClick={() => onTypeSelect(Type.New)}
            >
                <span>{t?.new}</span>
                <ArrowRightSvg className="w-6 h-6 mt-1" />
            </button>
        </div>
    );
}

export default TypesList;
