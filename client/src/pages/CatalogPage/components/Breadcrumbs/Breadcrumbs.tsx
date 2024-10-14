import { Link } from "react-router-dom";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import ArrowRight from "@/assets/arrow-right-2.svg?react";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import useBreadcrumbsTranslation from "./hooks/useBreadcrumbsTranslation";

interface BreadcrumbsProps {
    type: Type | null;
    category: Category | null;
    productName?: string | null;
}

export default function Breadcrumbs({ type, category, productName = null }: BreadcrumbsProps) {
    const t = useBreadcrumbsTranslation();

    return (
        <div className="flex flex-wrap items-center text-sm text-neutral-600 gap-x-2 gap-y-1 px-4">
            <Link to="/">{t.home}</Link>
            {type && (
                <>
                    <ArrowRight className="w-3 h-3" />{" "}
                    <Link to={`/catalog/${type.path}`}>
                        {t[type.path as "men" | "women" | "new"]}
                    </Link>
                </>
            )}
            {category && (
                <>
                    <ArrowRight className="w-3 h-3" />
                    <Link
                        className="whitespace-nowrap"
                        to={`/catalog/${type!.path}/${category.id}`}
                    >
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
