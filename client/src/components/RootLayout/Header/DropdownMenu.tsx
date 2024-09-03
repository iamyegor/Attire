import { Link } from "react-router-dom";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";

interface DropdownMenuProps {
    categories: Category[];
    isVisible: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    currentType: Type | null;
}

function DropdownMenu({
    categories,
    isVisible,
    onMouseEnter,
    onMouseLeave,
    currentType,
}: DropdownMenuProps) {
    return (
        <div
            className={`absolute left-0 top-10 shadow-lg w-full z-30 transition-opacity duration-300 bg-transparent pt-5
                ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex justify-center bg-white">
                <div className="flex gap-2 p-4 rounded-md max-w-[800px] flex-wrap">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            to={`catalog/${currentType?.path}/${category.id}`}
                            className="hover:bg-neutral-100 font-medium text-sm px-6 py-2 rounded-lg text-center"
                            onClick={onMouseLeave}
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DropdownMenu;
