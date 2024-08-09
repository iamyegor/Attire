import useAttireContext from "@/context/useAttireContext.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import CategorySection from "@/pages/CatalogPage/components/CategoryDashboard/CategorySection.tsx";

interface CategoriesDashboardProps {
    path: string;
}

export default function CategoriesDashboard({ path }: CategoriesDashboardProps) {
    const { menCategories, womenCategories, newCategories } = useAttireContext();

    return (
        <div className="flex-col w-min min-w-[240px] p-4 py-4 mt-8 space-y-4 bg-white rounded-2xl border border-gray-200 hidden lg:block">
            <CategorySection type={Type.Men} categories={menCategories} path={path} />
            <CategorySection type={Type.Women} categories={womenCategories} path={path} />
            <CategorySection type={Type.New} categories={newCategories} path={path} />
        </div>
    );
}
