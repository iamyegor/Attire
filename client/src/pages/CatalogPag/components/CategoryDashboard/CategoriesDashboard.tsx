import useAttireContext from "@/context/useAttireContext.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import CategorySection from "@/pages/CatalogPag/components/CategoryDashboard/CategorySection.tsx";

interface CategoriesDashboardProps {
    path: string;
}

export default function CategoriesDashboard({ path }: CategoriesDashboardProps) {
    const { menCategories, womenCategories, newCategories } = useAttireContext();
    return (
        <div className="space-y-2 bg-neutral-100 flex-col w-min min-w-[220px] p-2 py-2 rounded-lg">
            <CategorySection type={Type.Men} categories={menCategories} path={path} />
            <CategorySection type={Type.Women} categories={womenCategories} path={path} />
            <CategorySection type={Type.New} categories={newCategories} path={path} />
        </div>
    );
}
