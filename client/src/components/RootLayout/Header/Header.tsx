import BurgerMenuSvg from "@/assets/burger-menu.svg?react";
import CartSvg from "@/assets/cart.svg?react";
import HeartSvg from "@/assets/heart.svg?react";
import PersonSvg from "@/assets/person.svg?react";
import SearchSvg from "@/assets/search.svg?react";
import SmSearchSvg from "@/assets/sm-search.svg?react";
import BurgerMenu from "@/components/RootLayout/Header/BurgerMenu/BurgerMenu.tsx";
import Category from "@/components/RootLayout/Header/BurgerMenu/types/Category.ts";
import Type from "@/components/RootLayout/Header/BurgerMenu/types/Type.ts";
import DropdownMenu from "@/components/RootLayout/Header/DropdownMenu.tsx";
import HeaderIconLink from "@/components/RootLayout/Header/HeaderIconLink.tsx";
import HeaderLink from "@/components/RootLayout/Header/HeaderLink.tsx";
import useSearchTerm from "@/components/RootLayout/Header/hooks/useSearchTerm.ts";
import SearchComponent from "@/components/RootLayout/Header/SearchComponent/SearchComponent";
import useAttireContext from "@/context/useAttireContext.ts";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import useHeaderTranslations from "./hooks/useHeaderTranslations";

function Header() {
    const { searchTerm } = useSearchTerm();
    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);
    const [activeCategories, setActiveCategories] = useState<Category[]>([]);
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const [hoveredType, setHoveredType] = useState<Type | null>(null);
    const t = useHeaderTranslations();

    const { menCategories, womenCategories, newCategories } = useAttireContext();

    function handleSearchClose() {
        setSearchOpen(false);
    }

    function handleBurgerMenuClose() {
        setBurgerMenuOpen(false);
    }

    function showDropdown(type: Type, categories: Category[]) {
        setHoveredType(type);
        setActiveCategories(categories);
        setDropdownVisible(true);
    }

    function hideDropdown() {
        setDropdownVisible(false);
    }

    return (
        <header className="fixed top-0 left-0 right-0 bg-white py-3 px-5 md:px-8 shadow-lg z-20 flex justify-center">
            <div className="max-w-[1500px] w-full flex justify-between items-center">
                <Drawer
                    open={searchOpen}
                    onClose={handleSearchClose}
                    anchor="top"
                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                >
                    <SearchComponent onClose={handleSearchClose} />
                </Drawer>
                <Drawer
                    open={burgerMenuOpen}
                    onClose={handleBurgerMenuClose}
                    anchor="right"
                    PaperProps={{
                        className: "w-full sm:w-[450px]",
                    }}
                >
                    <BurgerMenu onClose={handleBurgerMenuClose} />
                </Drawer>
                <h1 className="text-3xl xs:text-4xl font-medium italic">
                    <Link to="/">Attire</Link>
                </h1>
                <div className="text-lg font-semibold hidden lg:flex space-x-10">
                    <HeaderLink
                        to={Type.New.path}
                        onMouseEnter={() => showDropdown(Type.New, newCategories)}
                        onMouseLeave={hideDropdown}
                        onClick={hideDropdown}
                    >
                        {t?.new}
                    </HeaderLink>
                    <HeaderLink
                        to={Type.Men.path}
                        onMouseEnter={() => showDropdown(Type.Men, menCategories)}
                        onMouseLeave={hideDropdown}
                        onClick={hideDropdown}
                    >
                        {t?.men}
                    </HeaderLink>
                    <HeaderLink
                        to={Type.Women.path}
                        onMouseEnter={() => showDropdown(Type.Women, womenCategories)}
                        onMouseLeave={hideDropdown}
                        onClick={hideDropdown}
                    >
                        {t?.women}
                    </HeaderLink>
                </div>
                <DropdownMenu
                    categories={activeCategories}
                    isVisible={dropdownVisible}
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={hideDropdown}
                    currentType={hoveredType}
                />
                <div className="flex items-center space-x-5">
                    <button
                        className="text-lg font-semibold text-neutral-500 hover:text-neutral-600 group md:bg-neutral-100 md:p-1 md:pr-4 rounded-full flex items-center md:space-x-3"
                        onClick={() => setSearchOpen(true)}
                    >
                        <SearchSvg className="hidden md:block w-5 h-5 ml-2 focus:outline-0 active:outline-0 outline-0 fill-neutral-500 group-hover:fill-neutral-600" />
                        <SmSearchSvg className="block md:hidden w-5 h-5 ml-2 fill-neutral-800" />
                        <p className="hidden md:block max-w-[14ch] truncate overflow-hidden whitespace-nowrap">
                            {searchTerm ? searchTerm : <span className="mr-16">{t?.search}</span>}
                        </p>
                    </button>
                    <HeaderIconLink to="/profile" SvgIcon={PersonSvg} />
                    <HeaderIconLink to="/favorites" SvgIcon={HeartSvg} />
                    <HeaderIconLink to="/cart" SvgIcon={CartSvg} />
                    <BurgerMenuSvg
                        className="block lg:hidden w-5 h-5 hover:cursor-pointer fill-neutral-800"
                        onClick={() => setBurgerMenuOpen(true)}
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
