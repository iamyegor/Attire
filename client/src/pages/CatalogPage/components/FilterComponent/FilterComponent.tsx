import { Drawer } from "@mui/material";
import { useState } from "react";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import FilterDrawer from "@/pages/CatalogPage/components/FilterComponent/FilterDrawer/FilterDrawer.tsx";
import { useLoadFilters } from "@/pages/CatalogPage/components/FilterComponent/hooks/useLoadFilters.ts";
import FilterButton from "@/pages/CatalogPage/components/FilterComponent/FilterButton.tsx";

interface FilterComponentProps {
    category: Category;
}

export default function FilterComponent({ category }: FilterComponentProps) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { data: filtersResponse } = useLoadFilters(category);

    function closeDrawer() {
        setIsDrawerOpen(false);
    }

    return (
        <div>
            <FilterButton isDrawerOpen={isDrawerOpen} openDrawer={() => setIsDrawerOpen(true)} />
            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} anchor="right" PaperProps={{className: "w-full sm:w-min sm:min-w-[400px]"}}>
                <div className="p-4 space-y-4 h-full">
                    {filtersResponse ? (
                        <FilterDrawer filtersResponse={filtersResponse} closeDrawer={closeDrawer} />
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </Drawer>
        </div>
    );
}
