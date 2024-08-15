import { Link } from "react-router-dom";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import ArrowRight from "@/assets/arrow-right-2.svg?react";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";

interface BreadcrumbsProps {
    type?: Type | null;
    category?: Category | null;
    productName?: string | null;
}

export default function Breadcrumbs({
    type = null,
    category = null,
    productName = null,
}: BreadcrumbsProps) {
    return (
        <div className="flex flex-wrap items-center text-sm text-neutral-600 space-x-2 left-4 px-4">
            <Link to="/">Главная</Link>
            {type && (
                <>
                    <ArrowRight className="w-3 h-3" />{" "}
                    <Link to={`/catalog/${type.path}`}>{type.name}</Link>
                </>
            )}
            {category && (
                <>
                    <ArrowRight className="w-3 h-3" />
                    <Link className="whitespace-nowrap" to={`/catalog/${category.path}`}>
                        {category.name}
                    </Link>
                </>
            )}
            {productName && (
                <>
                    <ArrowRight className="w-3 h-3" />
                    <p>{productName}</p>
                </>
            )}
        </div>
    );
}
