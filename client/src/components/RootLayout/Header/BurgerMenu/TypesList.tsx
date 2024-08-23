import ArrowRightSvg from "@/assets/arrow-right.svg?react";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";

interface CategoryListProps {
    onTypeSelect: (type: Type) => void;
}

function TypesList({ onTypeSelect }: CategoryListProps) {
    return (
        <div className="space-y-8 pt-32">
            <button
                className="text-3xl font-medium flex items-center space-x-3"
                onClick={() => onTypeSelect(Type.Men)}
            >
                <span>Мужчинам</span>
                <ArrowRightSvg className="w-6 h-6 mt-1" />
            </button>
            <button
                className="text-3xl font-medium flex items-center space-x-3"
                onClick={() => onTypeSelect(Type.Women)}
            >
                <span>Женщинам</span>
                <ArrowRightSvg className="w-6 h-6 mt-1" />
            </button>
            <button
                className="text-3xl font-medium flex items-center space-x-3"
                onClick={() => onTypeSelect(Type.New)}
            >
                <span>Новинки</span>
                <ArrowRightSvg className="w-6 h-6 mt-1" />
            </button>
        </div>
    );
}

export default TypesList;
