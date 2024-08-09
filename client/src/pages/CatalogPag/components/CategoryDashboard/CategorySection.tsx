import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import { Link } from "react-router-dom";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";

interface CategorySectionProps {
    type: Type;
    categories: Category[];
    path: string;
}

export default function CategorySection({ type, categories, path }: CategorySectionProps) {
    return (
        <div className="flex flex-col justify-center">
            <Link
                to={type.path}
                className={`mb-1 text-xl font-medium p-2 rounded-lg hover:cursor-pointer ${
                    path === type.path
                        ? "bg-neutral-200 hover:bg-neutral-300 "
                        : "hover:bg-neutral-200"
                }`}
            >
                <h2 className="">{type.name}</h2>
            </Link>
            <div className="flex flex-col space-y-1 text-neutral-700">
                {categories.map((category) => (
                    <Link
                        to={category.path}
                        key={category.path}
                        className={`pl-5 py-1.5 rounded-lg hover:cursor-pointer ${
                            path === category.path
                                ? "bg-neutral-200 hover:bg-neutral-300 "
                                : "hover:bg-neutral-200"
                        }`}
                    >
                        <p>{category.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
