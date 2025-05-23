import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import Breadcrumbs from "@/pages/CatalogPage/components/Breadcrumbs/Breadcrumbs";
import CategoriesDashboard from "@/pages/CatalogPage/components/CategoryDashboard/CategoriesDashboard.tsx";
import FilterComponent from "@/pages/CatalogPage/components/FilterComponent/FilterComponent.tsx";
import ProductsCatalog from "@/pages/CatalogPage/components/ProductsCatalog/ProductsCatalog";
import SortByComponent from "@/pages/CatalogPage/components/SortByComponent/SortByComponent.tsx";
import useCurrentCategoryAndType from "@/pages/CatalogPage/hooks/useCurrentTypeAndCategory.ts";
import { useParams } from "react-router-dom";

export default function CatalogPage() {
    const { "*": path } = useParams();
    const { category, type }: { category: Category | null; type: Type | null } =
        useCurrentCategoryAndType(path ?? null);

    function isNewCategory() {
        return type && type === Type.New;
    }

    return (
        <div className="mt-4 pb-8 space-y-3 lg:mt-0 h-full">
            <Breadcrumbs type={type} category={category} />
            <div className="flex mb-8 w-full h-full">
                <div className="lg:px-4 relative">
                    <CategoriesDashboard
                        currentType={type}
                        currentCategoryId={category?.id ?? null}
                    />
                </div>
                <div className="flex flex-col space-y-3 w-full h-full">
                    <div className="ml-4 flex space-x-5 h-11">
                        <SortByComponent />
                        {category && !isNewCategory() && <FilterComponent category={category} />}
                    </div>
                    <ProductsCatalog type={type} category={category} />
                </div>
            </div>
        </div>
    );
}
