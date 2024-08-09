import CategoriesList from "@/components/RootLayout/Header/BurgerMenu/CategoriesList.tsx";
import "@/components/RootLayout/Header/BurgerMenu/burger-menu.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useSelectedCategory from "@/components/RootLayout/Header/BurgerMenu/hooks/useSelectedCategory.ts";
import TypesList from "@/components/RootLayout/Header/BurgerMenu/TypesList.tsx";
import CloseButton from "@/components/ui/CloseButton.tsx";

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
                        <TypesList categories={categories} onTypeSelect={selectType} />
                    </CSSTransition>
                ) : (
                    <CSSTransition key="menu-category" timeout={300} classNames="slide-right">
                        <CategoriesList
                            selectedType={selectedType}
                            collections={categories}
                            onBackButtonClick={clearSelectedType}
                            closeMenu={onClose}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
            <CloseButton onClose={onClose} />
        </div>
    );
}
