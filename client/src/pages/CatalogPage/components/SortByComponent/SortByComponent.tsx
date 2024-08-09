import SortSvg from "@/assets/sort.svg?react";
import { Menu } from "@mui/material";
import SortBy from "@/pages/CatalogPage/components/SortByComponent/types/SortyBy.ts";
import SortDropdownButton from "@/pages/CatalogPage/components/SortByComponent/SortDropdownButton.tsx";
import useDropdown from "./hooks/useDropdown";
import useSorting from "@/pages/CatalogPage/components/SortByComponent/hooks/useSorting.ts";

export default function SortByComponent() {
    const { isDropdownOpen, anchorEl, showDropdown, hideDropdown } = useDropdown();
    const { sorting, changeSorting } = useSorting();

    function changeSortAndCloseDropdown(sortBy: SortBy) {
        hideDropdown();
        changeSorting(sortBy);
    }

    const sortOptions = [
        { type: SortBy.Popular, label: "Популярные" },
        { type: SortBy.New, label: "Новинки" },
        { type: SortBy.Cheaper, label: "Дешевле" },
        { type: SortBy.MoreExpensive, label: "Дороже" },
    ];

    return (
        <div className="flex flex-col">
            <div
                className={`flex h-full items-center justify-between space-x-2 border p-2 px-4 rounded-lg transition hover:cursor-pointer max-w-[200px] text-sm xs:text-base ${
                    isDropdownOpen ? "border-blue-500" : "border-neutral-300"
                }`}
                onClick={showDropdown}
            >
                <p>{sorting.value}</p>
                <SortSvg className="w-6 h-6" />
            </div>
            <Menu
                open={isDropdownOpen}
                anchorEl={anchorEl}
                onClose={hideDropdown}
                slotProps={{ paper: { className: "w-[200px] top-0 mt-1" } }}
            >
                <div className="flex flex-col px-2">
                    {sortOptions.map((option) => (
                        <SortDropdownButton
                            key={option.type.toString()}
                            isSelected={sorting === option.type}
                            onClick={() => changeSortAndCloseDropdown(option.type)}
                        >
                            {option.label}
                        </SortDropdownButton>
                    ))}
                </div>
            </Menu>
        </div>
    );
}
