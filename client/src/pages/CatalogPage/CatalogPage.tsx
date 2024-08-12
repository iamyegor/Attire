import { useParams } from "react-router-dom";
import Breadcrumbs from "@/pages/CatalogPage/components/Breadcrumbs.tsx";
import CategoriesDashboard from "@/pages/CatalogPage/components/CategoryDashboard/CategoriesDashboard.tsx";
import SortByComponent from "@/pages/CatalogPage/components/SortByComponent/SortByComponent.tsx";
import FilterComponent from "@/pages/CatalogPage/components/FilterComponent/FilterComponent.tsx";
import useCurrentCategoryAndType from "@/pages/CatalogPage/hooks/useCurrentCategory.tsx";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import Products from "@/pages/CatalogPage/components/Products.tsx";

export default function CatalogPage() {
    const { "*": path } = useParams();
    const { category, type }: { category: Category | null; type: Type | null } =
        useCurrentCategoryAndType(path ?? null);

    function isNewCategory() {
        return category?.path.startsWith(Type.New.path);
    }

    return (
        <div className="flex mt-4 lg:mt-0 mb-8 w-full">
            <div className="lg:px-4">
                {type && <Breadcrumbs type={type} category={category} />}
                {path && <CategoriesDashboard path={path} />}
            </div>
            <div className="flex flex-col space-y-3 w-full">
                <div className="mt-[34px] ml-4 flex space-x-5 h-11">
                    <SortByComponent />
                    {category && !isNewCategory() && <FilterComponent category={category} />}
                </div>
                {type && <Products type={type} category={category} />}
            </div>
        </div>
    );
}
