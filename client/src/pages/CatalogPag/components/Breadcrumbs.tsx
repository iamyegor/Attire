import { Link } from "react-router-dom";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import ArrowRight from "@/assets/arrow-right-2.svg?react";
import useCurrentCategory from "@/pages/CatalogPag/hooks/useCurrentCategory.tsx";

interface BreadcrumbsProps {
    path: string;
}

export default function Breadcrumbs({ path }: BreadcrumbsProps) {
    const type = Type.createBasedOnPath(path);
    const category = useCurrentCategory(path);

    return (
        <div className="flex items-center text-sm text-neutral-600 space-x-2">
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
