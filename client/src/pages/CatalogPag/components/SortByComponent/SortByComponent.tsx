import SortSvg from "@/assets/sort.svg?react";
import React, { useState } from "react";
import { Menu } from "@mui/material";
import SortBy from "@/pages/CatalogPag/components/types/SortyBy.ts";
import SortDropdownButton from "@/pages/CatalogPag/components/SortByComponent/SortDropdownButton.tsx";

export default function SortByComponent() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedSortBy, setSelectedSortBy] = useState<SortBy>(SortBy.Popular);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    function showDropdown(event: React.MouseEvent<HTMLDivElement>) {
        setIsDropdownOpen(true);
        setAnchorEl(event.currentTarget);
    }

    function hideDropdown() {
        setIsDropdownOpen(false);
    }

    function handleDropdownButtonClick(sortBy: SortBy) {
        setSelectedSortBy(sortBy);
        hideDropdown();
    }

    return (
        <div className="flex flex-col">
            <div
                className={`flex items-center space-x-2 border border-neutral-300 p-2 px-4 rounded-lg transition hover:cursor-pointer ${isDropdownOpen ? "border-blue-500" : ""}`}
                onClick={showDropdown}
            >
                <p>{selectedSortBy.value}</p>
                <SortSvg className="w-6 h-6" />
            </div>
            <Menu
                open={isDropdownOpen}
                anchorEl={anchorEl}
                onClose={hideDropdown}
                slotProps={{ paper: { className: "w-[160px] top-0 mt-1" } }}
            >
                <div className="flex flex-col px-2">
                    <SortDropdownButton onClick={() => handleDropdownButtonClick(SortBy.Popular)}>
                        Популярные
                    </SortDropdownButton>
                    <SortDropdownButton onClick={() => handleDropdownButtonClick(SortBy.New)}>
                        Новинки
                    </SortDropdownButton>
                    <SortDropdownButton onClick={() => handleDropdownButtonClick(SortBy.Cheaper)}>
                        Дешевле
                    </SortDropdownButton>
                    <SortDropdownButton
                        onClick={() => handleDropdownButtonClick(SortBy.MoreExpensive)}
                    >
                        Дороже
                    </SortDropdownButton>
                </div>
            </Menu>
        </div>
    );
}
