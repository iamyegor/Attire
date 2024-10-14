import FilterSvg from "@/assets/filter.svg?react";
import useFilterButtonTranslation from "./FilterDrawer/hooks/useFilterButtonTranslation";

interface FilterButtonProps {
    isDrawerOpen: boolean;
    openDrawer: () => void;
}

export default function FilterButton({ isDrawerOpen, openDrawer }: FilterButtonProps) {
    const t = useFilterButtonTranslation();

    return (
        <div
            className={`flex items-center justify-between space-x-2 border p-2 px-4 rounded-lg transition hover:cursor-pointer text-xs xs:text-base h-full ${
                isDrawerOpen ? "border-blue-500" : "border-neutral-300"
            }`}
            onClick={openDrawer}
        >
            <FilterSvg className="w-5 h-5" />
            <p>{t.filters}</p>
        </div>
    );
}
