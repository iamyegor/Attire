import CrossSvg from "@/assets/black-cross.svg?react";
import TypesList from "@/components/RootLayout/Header/BurgerMenu/TypesList.tsx";
import "@/components/RootLayout/Header/BurgerMenu/burger-menu.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useSelectedCategory from "@/components/RootLayout/Header/BurgerMenu/hooks/useSelectedCategory.ts";
import CategoryList from "@/components/RootLayout/Header/BurgerMenu/CategoryList.tsx";

interface BurgerMenuProps {
    onClose: () => void;
}

export default function BurgerMenu({ onClose }: BurgerMenuProps) {
    const { selectedType, categories, selectType, clearSelectedType } = useSelectedCategory();

    return (
        <div className="w-full h-full pl-8">
            <TransitionGroup>
                {!selectedType ? (
                    <CSSTransition key="category-list" timeout={300} classNames="slide-left">
                        <CategoryList categories={categories} onTypeSelect={selectType} />
                    </CSSTransition>
                ) : (
                    <CSSTransition key="menu-category" timeout={300} classNames="slide-right">
                        <TypesList
                            selectedType={selectedType}
                            collections={categories}
                            onBackButtonClick={clearSelectedType}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
            <button
                className="absolute top-2 right-2 flex-shrink-0 border-transparent border-4 text-neutral-700 py-1 px-2 rounded font-medium"
                onClick={onClose}
            >
                <CrossSvg className="w-8 h-8" />
            </button>
        </div>
    );
}
