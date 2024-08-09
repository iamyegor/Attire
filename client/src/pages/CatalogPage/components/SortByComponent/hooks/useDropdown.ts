import { useState } from "react";

export default function useDropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    function showDropdown(event: React.MouseEvent<HTMLDivElement>) {
        setIsDropdownOpen(true);
        setAnchorEl(event.currentTarget);
    }

    function hideDropdown() {
        setIsDropdownOpen(false);
        setAnchorEl(null);
    }

    return {
        isDropdownOpen,
        anchorEl,
        showDropdown,
        hideDropdown,
    };
}
