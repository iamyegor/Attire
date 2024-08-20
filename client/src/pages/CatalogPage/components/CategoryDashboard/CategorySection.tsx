import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import { Link, useSearchParams } from "react-router-dom";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";

interface CategorySectionProps {
    type: Type;
    categories: Category[];
    currentType: Type | null;
    currentCategoryId: string | null;
}

export default function CategorySection({
    type,
    categories,
    currentType,
    currentCategoryId,
}: CategorySectionProps) {
    const [searchParams, _] = useSearchParams();

    const sorting = searchParams.get("sorting");
    return (
        <div className="flex flex-col justify-center">
            <Link
                to={`${type.path}${sorting ? `?sorting=${sorting}` : ""}`}
                className={`mb-2 text-lg font-semibold p-2 rounded-xl hover:cursor-pointer transition-colors duration-200 ${
                    type == currentType && !currentCategoryId
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-800 hover:bg-gray-100"
                }`}
            >
                <h2>{type.name}</h2>
            </Link>
            <div className="flex flex-col space-y-2 text-gray-700">
                {categories.map((category) => (
                    <Link
                        to={`${type.path}/${category.id}${sorting ? `?sorting=${sorting}` : ""}`}
                        key={category.id}
                        className={`pl-6 py-2 rounded-xl hover:cursor-pointer transition-colors duration-200 ${
                            currentCategoryId == category.id
                                ? "bg-blue-100 text-blue-600"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        <p>{category.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
