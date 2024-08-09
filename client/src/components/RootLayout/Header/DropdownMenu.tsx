import { Link } from "react-router-dom";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";

interface DropdownMenuProps {
    categories: Category[];
    isVisible: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

function DropdownMenu({ categories, isVisible, onMouseEnter, onMouseLeave }: DropdownMenuProps) {
    return (
        <div
            className={`absolute left-0 top-10 shadow-lg w-full z-50 transition-opacity duration-300 bg-transparent pt-5
                ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex justify-center bg-white">
                <div className="grid grid-cols-[repeat(5,180px)] gap-2 p-4 max-w-screen-xl rounded-md">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            to={`catalog/${category.path}`}
                            className="hover:bg-neutral-100 font-medium text-base px-4 py-2 rounded-lg text-center"
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
