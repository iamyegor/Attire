import useAttireContext from "@/context/useAttireContext.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import CategorySection from "@/pages/CatalogPage/components/CategoryDashboard/CategorySection/CategorySection";

interface CategoriesDashboardProps {
    currentType: Type | null;
    currentCategoryId: string | null;
}

export default function CategoriesDashboard({
    currentType,
    currentCategoryId,
}: CategoriesDashboardProps) {
    const { menCategories, womenCategories, newCategories } = useAttireContext();

    return (
        <div className="flex-col w-min min-w-[240px] p-2 space-y-2 bg-white rounded-2xl border border-gray-200 hidden lg:block">
            <CategorySection
                type={Type.Men}
                categories={menCategories}
                currentType={currentType}
                currentCategoryId={currentCategoryId}
            />
            <CategorySection
                type={Type.Women}
                categories={womenCategories}
                currentType={currentType}
                currentCategoryId={currentCategoryId}
            />
            <CategorySection
                type={Type.New}
                categories={newCategories}
                currentType={currentType}
                currentCategoryId={currentCategoryId}
            />
        </div>
    );
}
