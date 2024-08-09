import { Link } from "react-router-dom";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import ArrowRight from "@/assets/arrow-right-2.svg?react";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";

interface BreadcrumbsProps {
    path: string;
    category: Category | null;
}

export default function Breadcrumbs({ path, category }: BreadcrumbsProps) {
    const type = Type.createBasedOnPath(path);

    return (
        <div className="absolute flex items-center text-sm text-neutral-600 space-x-2 left-4">
            <Link to="/">Главная</Link>
            <ArrowRight className="w-3 h-3" />
            <Link to={type.path}>{type.name}</Link>
            {category && (
                <>
                    <ArrowRight className="w-3 h-3" />
                    <Link to={category.path}>{category.name}</Link>
                </>
            )}
        </div>
    );
}
